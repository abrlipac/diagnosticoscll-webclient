<script>
  import EdicionDiagnostico from '$lib/components/EdicionDiagnostico.svelte'
  import { page } from '$app/stores'

  let id = $page.url.searchParams.get('id')
</script>

<h1 class="text-center mt-4">Editar diagnóstico</h1>
<h4 class="text-center">Responda las preguntas planteadas</h4>
<hr class="col-md-4 mx-auto" />

<div class="row justify-content-center">
  <div class="col col-md-6">
    <EdicionDiagnostico {id} />
  </div>
</div>
