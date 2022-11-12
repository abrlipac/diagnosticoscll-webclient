<script>
  import ListaDiagnosticos from '$lib/components/ListaDiagnosticos.svelte'
</script>

<h1 class="text-center mt-4">Editar diagnóstico</h1>
<h4 class="text-center">Haga clic en el botón del diagnóstico que quiera editar</h4>
<hr class="col-md-4 mx-auto" />

<div class="row justify-content-center">
  <div class="col col-md-9">
    <ListaDiagnosticos accion="editar" />
  </div>
</div>
