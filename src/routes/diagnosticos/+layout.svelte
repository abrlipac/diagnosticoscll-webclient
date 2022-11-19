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

{#if isUserAuth}
  <slot />
{:else}
  <div class="loader" />
{/if}
