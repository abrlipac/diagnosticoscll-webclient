<script>
  import { userStore } from '$lib/store.js'
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'
  import Cookies from 'js-cookie'
  import { get, writable } from 'svelte/store'

  onMount(() => {
    if (get(userStore).isAuth) {
      goto('/')
    } else {
      goto('/login')
    }
  })
</script>

<div class="col-xxl-8 px-4 py-5">
  <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div class="col-10 col-sm-8 col-lg-6">
      <img
        src="img/sede-tacna.jpg"
        class="d-block mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        loading="lazy"
        width="700"
        height="500" />
    </div>
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold lh-1 mb-3">Bienvenido al sistema!</h1>
      <p class="lead">
        Para empezar puede elegir alguna de las opciones del menú o puede
        generar un nuevo diagnóstico haciendo clic abajo.
      </p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
          Generar diagnóstico
        </button>
      </div>
    </div>
  </div>
</div>
