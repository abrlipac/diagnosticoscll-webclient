<script context="module">
  import { userStore } from '$lib/store.js'
  import { get } from 'svelte/store'
  import { redirect } from '@sveltejs/kit'
  import { browser } from '$app/environment'

  let isUserAuth = get(userStore).isAuth

  if (browser) {
    if (!isUserAuth) {
      throw redirect(302, '/login')
    }
  }
</script>

{#if !isUserAuth}
  <div class="loader" />
{:else}
  <div class="col-sm-10 col-11">
    <div class="row flex-lg-row-reverse align-items-center g-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="img/sede-tacna.jpg"
          class="d-block mx-lg-auto img-fluid rounded"
          alt="Bootstrap Themes"
          loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">!Bienvenido al sistema!</h1>
        <p class="lead">
          Para empezar puede elegir alguna de las opciones del menú o puede
          generar un nuevo diagnóstico haciendo clic abajo.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a
            href="/diagnosticos/nuevo"
            class="btn btn-primary btn-lg px-4 me-md-2">
            Generar diagnóstico
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}
