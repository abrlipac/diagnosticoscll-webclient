<script>
  import axios from 'axios'
  import Cookies from 'js-cookie'
  import { userStore } from '$lib/store.js'
  import { goto } from '$app/navigation'
  import auth from '$lib/auth.js'
  import { config } from '$lib/config.js'

  const identityApi = config.urls.apiIdentity

  let errors = []
  let correctLogin = false

  let user = {
    username: '',
    password: '',
  }

  async function handleLogin() {
    await iniciarSesion()
  }

  async function iniciarSesion() {
    let response = await axios
      .post(`${identityApi}/identity/auth`, user)
      .catch((error) => {
        errors = error.response.data.errors
      })

    if (response?.status === 200 && response?.data.succeeded) {
      const accessToken = response.data.content.accessToken

      Cookies.set('AuthorizationToken', `Bearer ${accessToken}`, {
        expires: 1 / 24,
      })
      userStore.set(auth.extractUserFromToken(accessToken))

      correctLogin = true
      goto('/')
    }
  }
</script>

{#if errors.length > 0}
  <div class="alert alert-danger">
    {#each errors as error}
      <div>{error}</div>
    {/each}
  </div>
{/if}

{#if correctLogin}
  <div class="alert alert-success">
    <p>Ha iniciado sesión correctamente</p>
  </div>
{/if}

<div class="row justify-content-center">
  <div class="col">
    <form on:submit|preventDefault={handleLogin}>
      <div class="text-danger" />

      <div class="form-floating mb-3">
        <input
          bind:value={user.username}
          class="form-control"
          id="username"
          placeholder="name@example.com" />
        <label for="username" class="form-label">Usuario</label>
        <span class="text-danger" />
      </div>

      <div class="form-floating mb-3">
        <input
          bind:value={user.password}
          id="password"
          class="form-control"
          type="password"
          placeholder="***" />
        <label for="password" class="form-label">Contraseña</label>
        <span class="text-danger" />
      </div>

      <input
        class="btn btn-primary w-100 mb-2"
        type="submit"
        name="submit"
        value="Iniciar sesión" />

      <div class="text-center">
        <a href="/signup" class="btn btn-outline-secondary w-100">
          Registrarse
        </a>
      </div>
    </form>
  </div>
</div>
