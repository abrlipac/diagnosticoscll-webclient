<script>
  import VistaDiagnostico from '$lib/components/VistaDiagnostico.svelte'
  import { page } from '$app/stores'

  let id = $page.url.searchParams.get('id')
</script>

<div class="col-lg-4 col-md-6 col-sm-7 col p-4">
  <h1 class="text-center display-5">Ver diagnóstico</h1>
  <h4 class="text-center">Detalles del diagnóstico generado</h4>
  <hr />
  <div class="row justify-content-center">
    <VistaDiagnostico {id} />
  </div>
</div>
