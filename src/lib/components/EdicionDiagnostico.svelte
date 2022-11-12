<script>
  import { onMount } from 'svelte'
  import axios from 'axios'
  import { goto } from '$app/navigation'

  let diagnostico = {}
  let diagnosticoGenerado = {}
  let preguntas
  let seGeneroDiagnostico = false

  export let id = 1

  onMount(async () => {
    await getDiagnostico()
    await getPreguntas()

    console.log(diagnostico)

    preguntas = preguntas.map((p) => {
      return {
        id: p.id,
        pregunta: p.contenido,
        tieneOpciones: p.tieneOpciones,
        opciones: p.opciones.map((o) => o.valor),
        respuesta:
          diagnostico.detallesDiagnostico.find((dd) => p.id == dd.pregunta_Id)
            ?.respuesta || '',
      }
    })

    console.log(preguntas)
  })

  async function getDiagnostico() {
    let response = await axios.get(`${apiDiagnosticos}/diagnosticos/${id}`)

    if (response.status === 200 && response.data) diagnostico = response.data
  }

  async function getPreguntas() {
    let espId = diagnostico.especialidad_Id
    let response = await axios.get(
      `${apiDiagnosticos}/diagnosticos/preguntas?espId=${espId}&take=30`
    )

    if (response.status === 200 && response.data)
      preguntas = [...response.data.items]
  }

  function verResultados() {
    const editarDiagnostico = {
      id: diagnostico.id,
      detallesdiagnostico: preguntas
        .filter((pr) => pr.respuesta != '')
        .map((pr) => {
          return {
            pregunta_id: pr.id,
            respuesta: pr.respuesta,
          }
        }),
    }
    console.log(editarDiagnostico)
    axios
      .put(`${apiDiagnosticos}/diagnosticos`, editarDiagnostico)
      .then((response) => {
        if (response.status === 200) {
          //diagnosticoGenerado = response.data
          //console.log(diagnosticoGenerado)
          seGeneroDiagnostico = true
          goto(`/diagnosticos/ver?id=${diagnostico.id}`)
        }
      })
      .catch((e) => console.log(e))
  }
</script>

<div
  class="alert alert-success {seGeneroDiagnostico ? '' : 'collapse'}"
  role="alert"
  id="diagnosticoGenerado">
  Se ha generado el diagnóstico
</div>

{#if preguntas}
  <div class="card my-3">
    <div class="card-header">
      <h4 class="text-center">Detalles de diagnóstico</h4>
    </div>

    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th>Pregunta</th>
            <th>Respuesta</th>
          </tr>
        </thead>
        <tbody>
          {#each preguntas as pr}
            <tr>
              <td>{pr.pregunta}</td>
              <td>
                {#if pr.tieneOpciones}
                  <select bind:value={pr.respuesta} class="form-select">
                    <option value="" selected>Seleccione una opción</option>
                    {#each pr.opciones as op}
                      <option value={op}>{op}</option>
                    {/each}
                  </select>
                {:else}
                  <input
                    bind:value={pr.respuesta}
                    type="text"
                    class="form-control" />
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="card-footer">
      <button
        type="button"
        class="btn btn-primary w-100 mt-3"
        on:click|preventDefault={verResultados}>
        Ver resultados
      </button>
    </div>
  </div>
{/if}
