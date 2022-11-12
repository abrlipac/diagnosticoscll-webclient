<script>
  import { onMount } from 'svelte'
  import axios from 'axios'

  let diagnostico = {}

  let especialidades
  let preguntas

  export let id = 1

  onMount(async () => {
    await getDiagnostico()
    let date = new Date(diagnostico.fecha)
    diagnostico.fecha = date.toLocaleDateString()
    diagnostico.hora = date.toLocaleTimeString()

    await getEspecialidades()
    diagnostico.nombreEspecialidad = especialidades.find(
      (e) => e.id == diagnostico.especialidad_Id
    ).nombre

    await getPreguntas()
    diagnostico.preguntas = diagnostico.detallesDiagnostico.map((p) => {
      return {
        ...p,
        nombre: preguntas.find((e) => e.id === p.pregunta_Id).contenido,
      }
    })
  })

  async function getDiagnostico() {
    let response = await axios.get(`${apiDiagnosticos}/diagnosticos/${id}`)

    if (response.status === 200 && response.data) diagnostico = response.data
  }

  async function getEspecialidades() {
    let response = await axios.get(
      `${apiDiagnosticos}/diagnosticos/especialidades`
    )

    if (response.status === 200 && response.data)
      especialidades = [...response.data.items]
  }

  async function getPreguntas() {
    let espId = diagnostico.especialidad_Id
    let response = await axios.get(
      `${apiDiagnosticos}/diagnosticos/preguntas?espId=${espId}&take=30`
    )

    if (response.status === 200 && response.data)
      preguntas = [...response.data.items]
  }
</script>

<div class="card my-3">
  <div class="card-header">
    <h4 class="text-center">Datos del diagnóstico</h4>
  </div>
  <div class="card-body">
    <p>
      Id: <span class="fw-bold">{diagnostico.id}</span>
    </p>
    <p>
      Fecha: <span class="fw-bold">{diagnostico.fecha}</span>
    </p>
    <p>
      Hora: <span class="fw-bold">{diagnostico.hora}</span>
    </p>
    <p>
      Especialidad: <span class="fw-bold">
        {diagnostico.nombreEspecialidad}
      </span>
    </p>
  </div>
</div>

{#if diagnostico.posiblesEnfermedades}
  <div class="card my-3">
    <div class="card-header">
      <h4 class="text-center">Posibles enfermedades</h4>
    </div>

    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th>Enfermedad</th>
            <th>Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          {#each diagnostico.posiblesEnfermedades as pe}
            <tr>
              <td>{pe.enfermedad_Nombre}</td>
              <td>{pe.porcentaje}%</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
{/if}

{#if diagnostico.preguntas}
  <div class="card my-3">
    <div class="card-header">
      <h4 class="text-center">Detalles del diagnóstico</h4>
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
          {#each diagnostico.preguntas as pr}
            <tr>
              <td>{pr.nombre}</td>
              <td>{pr.respuesta}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
{/if}
