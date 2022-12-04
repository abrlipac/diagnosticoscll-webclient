<script>
  import { onMount } from 'svelte'
  import axios from 'axios'
  import { config } from '$lib/config.js'

  const apiDiagnosticos = config.urls.apiDiagnosticos

  export let accion

  let enfermedadesDiagnosticadas
  let especialidades
  let hayEnfermedadesDiagnosticadas = false

  onMount(async () => {
    let response = await axios.get(
      `${apiDiagnosticos}/diagnosticos/enfermedadesDiagnosticadas/`
    )

    if (response.status === 200 && response.data) {
      enfermedadesDiagnosticadas = [...response.data.items].map((e) => ({
        id: e.id,
        espId: e.especialidad_Id,
        espNombre: '',
        fecha: e.fecha,
        nombre: e.enfermedad_Nombre,
      }))
      response = await axios.get(
        `${apiDiagnosticos}/diagnosticos/especialidades`
      )
      if (response.status === 200 && response.data) {
        especialidades = [...response.data.items]

        console.log(especialidades)

        enfermedadesDiagnosticadas = enfermedadesDiagnosticadas.map((e) => {
          const fecha = new Date(e.fecha)
          return {
            id: e.id,
            espNombre: especialidades.find((esp) => esp.id === e.espId).nombre,
            fecha: `${fecha.getDate()}/${
              fecha.getMonth() + 1
            }/${fecha.getFullYear()}`,
            nombre: e.nombre,
          }
        })
      }
      hayEnfermedadesDiagnosticadas = true
    }
    console.log(enfermedadesDiagnosticadas)
  })
</script>

{#if hayEnfermedadesDiagnosticadas}
  <table class="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Fecha</th>
        <th>Enfermedad</th>
        <th>Especialidad</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {#each enfermedadesDiagnosticadas as enfermedad}
        <tr>
          <td>{enfermedad.id}</td>
          <td>{enfermedad.fecha}</td>
          <td>{enfermedad.nombre}</td>
          <td>{enfermedad.espNombre}</td>
          <td>
            {#if accion === 'editar'}
              <a
                href="/paciente/diagnosticos/editar?id={enfermedad.id}"
                class="btn btn-outline-warning">
                Editar
              </a>
            {/if}
            <a
              href="/paciente/diagnosticos/ver?id={enfermedad.id}"
              class="btn btn-outline-primary">
              Ver
            </a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
