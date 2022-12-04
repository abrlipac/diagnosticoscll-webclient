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
        <h1 class="display-5 fw-bold lh-1 mb-3">!Hola!</h1>
        <p class="lead">
          Para empezar puede elegir alguna de las opciones de abajo
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a href="/auth/login" class="btn btn-primary btn-lg px-4 me-md-2">
            Iniciar sesión
          </a>
          <a
            href="/auth/signup"
            class="btn btn-outline-secondary btn-lg px-4 me-md-2">
            Registrarse
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
