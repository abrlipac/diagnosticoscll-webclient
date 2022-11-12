<script>
  import VistaDiagnostico from '$lib/components/VistaDiagnostico.svelte'
  import { page } from '$app/stores'

  let id = $page.url.searchParams.get('id')
</script>

<h1 class="text-center mt-4">Ver diagnóstico</h1>
<hr class="col-md-4 mx-auto" />

<div class="row justify-content-center">
  <div class="col col-md-6">
      <VistaDiagnostico {id} />
  </div>
</div>
