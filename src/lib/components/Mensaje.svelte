<script>
  import { onMount } from 'svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let mensaje = {
    esPregunta: false,
    contenido: '',
    opciones: [],
    opcionElegida: '',
  }

  function elegirOpcion(opcion) {
    mensaje.opcionElegida = opcion

    dispatch('elegirOpcion', {
      opcionElegida: opcion,
    })
  }

  onMount(async () => {
    if (mensaje.esPregunta && mensaje.contenido === 'Bienvenido!') {
      dispatch('pasarSgtePregunta')
    }
  })
</script>

<div
  class="container d-flex flex-row mb-1 {!mensaje.esPregunta
    ? 'justify-content-end mb-3'
    : 'pe-5'}">
  {#if mensaje.esPregunta}
    <div class="chatbot__boticon rounded-circle pr-2 align-self-center border">
      <img src="/img/bot.svg" class="w-100 h-100" alt="logo bot" />
    </div>
  {/if}
  <div>
    <div
      class="chatbot__message btn text-wrap text-start mt-1 {!mensaje.esPregunta
        ? 'btn-primary'
        : 'btn-outline-primary ms-1'}">
      {mensaje.contenido}
      {#if mensaje.esPregunta && !['Bienvenido! 🙂', 'Muchas gracias por responder las preguntas! 🙂', 'Se han generado los resultados! ✅', 'Inténtelo más tarde...', '... 🤔'].includes(mensaje.contenido)}
        {#if !mensaje.contenido.includes('Elija una especialidad 👇') && !mensaje.contenido.startsWith('❌')}
          {#if mensaje.opciones && mensaje.opciones.length > 0}
            Elija una opción 👇
          {:else}
            🤔
          {/if}
        {/if}
      {/if}
    </div>
    {#if mensaje.opciones != null}
      <div class="chatbot__options d-flex pt-1 ms-1">
        {#each mensaje.opciones as opcion}
          <button
            class="btn btn-outline-secondary"
            on:click|preventDefault={() => elegirOpcion(opcion)}>
            {opcion}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .chatbot__boticon {
    min-width: 50px;
    max-width: 50px;
  }
  .chatbot__options {
    gap: 0.2rem;
    flex-wrap: wrap;
  }
</style>
