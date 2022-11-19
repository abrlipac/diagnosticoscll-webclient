<script>
  import { diagnosticoStore } from '$lib/store.js'
  import { get } from 'svelte/store'
  import { onMount } from 'svelte'
  import axios from 'axios'
  import { config } from '$lib/config.js'

  const apiDiagnosticos = config.urls.apiDiagnosticos

  let diagnostico = get(diagnosticoStore)
  let enfermedades
  let idEnfermedadMasProbable
  let enfermedadMasProbable

  let seCargoEnfermedadMasProbable = false

  onMount(async () => {
    const response = await axios.get(
      `${apiDiagnosticos}/diagnosticos/enfermedades`
    )

    if (response.status === 200 && response.data) {
      enfermedades = [...response.data.items].map((e) => ({
        id: e.id,
        nombre: e.nombre,
        descripcion: e.descripcion,
        tratamiento: e.tratamiento,
      }))

      idEnfermedadMasProbable =
        diagnostico.posiblesEnfermedades[0].enfermedad_Id
      enfermedadMasProbable = enfermedades.find(
        (e) => e.id === idEnfermedadMasProbable
      )

      seCargoEnfermedadMasProbable = true

      console.log(idEnfermedadMasProbable)
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

<div class="card mb-3 px-0">
  <div class="card-header">
    <h4 class="text-center mb-0">Posibles enfermedades</h4>
  </div>

  <div class="card-body">
    <ul class="list-group">
      {#each diagnostico.posiblesEnfermedades as posibleEnfermedad, i}
        <li class="list-group-item">
          <span class="{i == 0 ? 'text-primary' : ''} fw-bold">{posibleEnfermedad.porcentaje} %</span>
          - {posibleEnfermedad.nombre} {i == 0 ? '(Más probable)' : ''}
        </li>
      {/each}
    </ul>
  </div>
</div>

{#if seCargoEnfermedadMasProbable}
  <div class="card mb-3 px-0">
    <div class="card-header">
      <h4 class="text-center mb-0">
        Enfermedad más probable
      </h4>
    </div>
    <div class="card-body">
      <h5 class="fw-bold text-center text-primary">
        {diagnostico.posiblesEnfermedades[0].nombre}
      </h5>
      <h5>Descripción</h5>
      <p>{enfermedadMasProbable.descripcion}</p>
      <h5>Tratamiento</h5>
      <p>{enfermedadMasProbable.tratamiento}</p>
    </div>
  </div>
{/if}

<div class="d-flex flex-column">
  <a href="http://servicios.clinicalaluz.pe/" class="btn btn-primary mb-2">
    Reservar una cita
  </a>
  <a href="/" class="btn btn-outline-primary">Regresar al menú</a>
</div>
