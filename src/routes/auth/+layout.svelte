<script context="module">
  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { fromLocalStorage, userFallbackValue } from '$lib/session.js'
  import { browser } from '$app/environment'
  import { redirect } from '@sveltejs/kit'

  let usuarioActual = fromLocalStorage('user', userFallbackValue)

  if (usuarioActual.isAuth) {
    console.log(`redirecting to /${usuarioActual.role.toLowerCase()}`)
    if (browser) {
      throw redirect(302, `/${usuarioActual.role.toLowerCase()}`)
    }
  }

  const opciones = []
</script>

<Navbar {usuarioActual} {opciones} />
<div
  class="container-fluid d-flex align-items-center justify-content-center px-0"
  style="min-height: calc(100vh - 3.5rem - 1px)">
  {#if !usuarioActual.isAuth}
    <slot />
  {:else}
    <div class="loader" />
  {/if}
</div>
<Footer />
