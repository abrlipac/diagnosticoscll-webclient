<script>
  import { goto } from '$app/navigation'
  import { toLocalStorage, userFallbackValue } from '$lib/session.js'
  import { writable } from 'svelte/store'

  export let usuarioActual
  export let opciones

  async function cerrarSesionHandler() {
    toLocalStorage(writable(userFallbackValue), 'user')
    await goto('/auth/login')
  }
</script>

<nav class="navbar navbar-expand-lg border-bottom">
  <div class="container-fluid">
    <a class="navbar-brand" href="/{usuarioActual.role.toLowerCase()}">
      <img src="/img/logo1.png" class="logo" alt="Logo de Clínica La Luz" />
      Diagnósticos
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div
      class="collapse navbar-collapse justify-content-between"
      id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        {#if usuarioActual.isAuth}
          {#each opciones as opcion}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href={'#'}
                id={Object.keys(opcion)}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {Object.keys(opcion)}
              </a>
              <ul class="dropdown-menu">
                {#each Object.values(opcion)[0] as subOpcion}
                  <li>
                    <a class="dropdown-item" href={Object.values(subOpcion)[0]}>
                      {Object.keys(subOpcion)}
                    </a>
                  </li>
                {/each}
              </ul>
            </li>
          {/each}
        {/if}
      </ul>

      {#if usuarioActual.isAuth}
        <ul class="list-unstyled ms-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href={'#'}
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img
                src={usuarioActual.profile}
                class="logo"
                alt="foto de usuario" />
              {usuarioActual.name}
              <span class="caret" />
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="/paciente/perfil">
                  Perfil de usuario
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/paciente/2fa">Agregar 2FA</a>
              </li>
              <li>
                <button class="dropdown-item" on:click={cerrarSesionHandler}>
                  Cerrar sesión
                </button>
              </li>
            </ul>
          </li>
        </ul>
      {:else}
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-1">
            <a class="nav-link text-primary" href="/auth/login">
              Iniciar sesión
            </a>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link text-secondary" href="/auth/signup">
              Registrarse
            </a>
          </li>
        </ul>
      {/if}
    </div>
  </div>
</nav>

<style>
  .logo {
    height: 1.4rem;
  }
</style>
