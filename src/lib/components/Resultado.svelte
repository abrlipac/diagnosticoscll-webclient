<script>
  import { diagnosticoStore } from '$lib/store.js'
  import { get } from 'svelte/store'
  import { onMount } from 'svelte'
  import axios from 'axios'
  import { config } from '$lib/config.js'

  const apiDiagnosticos = config.urls.apiDiagnosticos

  let diagnostico = get(diagnosticoStore)
  let enfermedades

  onMount(async () => {
    const response = await axios.get(
      `${apiDiagnosticos}/diagnosticos/enfermedades`
    )

    if (response.status === 200 && response.data) {
      enfermedades = [...response.data.items].map((e) => ({
        id: e.id,
        nombre: e.nombre,
      }))
    }

    diagnostico.posiblesEnfermedades = diagnostico.posiblesEnfermedades.map(
      (e) => {
        return {
          porcentaje: Math.round(e.porcentaje * 100) / 100,
          nombre: enfermedades.find((enf) => enf.id === e.enfermedad_Id).nombre,
        }
      }
    )
  })
</script>

<div class="card my-3">
  <div class="card-header">
    <h4 class="text-center">Posibles enfermedades</h4>
  </div>

  <div class="card-body">
    <ul class="list-group mb-3">
      {#each diagnostico.posiblesEnfermedades as posibleEnfermedad}
        <li class="list-group-item">
          <b>{posibleEnfermedad.porcentaje} %</b>
          - {posibleEnfermedad.nombre}
        </li>
      {/each}
    </ul>
  </div>
</div>

<div class="d-flex flex-column">
  <a href="https://clinicalaluz.pe/contacto/" class="btn btn-primary mb-2">
    Reservar una cita
  </a>
  <a href="/" class="btn btn-outline-primary">Regresar al menú</a>
</div>
