<script context="module">
  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { redirect } from '@sveltejs/kit'
  import { browser } from '$app/environment'
  import { fromLocalStorage, userFallbackValue } from '$lib/session.js'

  let usuarioActual = fromLocalStorage('user', userFallbackValue)

  if (!usuarioActual.isAuth) {
    console.log('redirecting to /auth/login')
    if (browser) {
      throw redirect(302, '/auth/login')
    }
  }

  const opciones = [
    {
      Diagnósticos: [
        { 'Generar diagnóstico': '/paciente/diagnosticos/nuevo' },
        {
          'Editar síntomas de diagnóstico':
            '/paciente/diagnosticos/lista-editar',
        },
        { 'Visualizar diagnósticos': '/paciente/diagnosticos/' },
      ],
    },
    {
      Reportes: [{ 'Ver reporte de salud': '/paciente/reportes' }],
    },
  ]
</script>

<Navbar {usuarioActual} {opciones} />
<div
  class="container-fluid d-flex align-items-center justify-content-center px-0"
  style="min-height: calc(100vh - 3.5rem - 1px)">
  {#if usuarioActual.isAuth}
    <slot />
  {:else}
    <div class="loader" />
  {/if}
</div>
<Footer />
