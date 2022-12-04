<script>
  import EdicionDiagnostico from '$lib/components/EdicionDiagnostico.svelte'
  import { page } from '$app/stores'

  let id = $page.url.searchParams.get('id')
</script>

<div class="col-lg-8 col-md-10 col-sm-11 col p-4">
  <h1 class="text-center display-5">Editar diagnóstico</h1>
  <h4 class="text-center">Responda las preguntas planteadas</h4>
  <hr />

  <div class="row justify-content-center">
    <EdicionDiagnostico {id} />
  </div>
</div>
