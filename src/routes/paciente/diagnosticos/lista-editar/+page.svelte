<script>
  import ListaDiagnosticos from '$lib/components/ListaDiagnosticos.svelte'
</script>

<div class="col-lg-7 col-md-8 col-sm-11 col p-4">
  <h1 class="text-center display-5">Editar diagnóstico</h1>
  <h4 class="text-center">
    Haga clic en el botón <span class="fst-italic">Editar</span>
     del diagnóstico que quiera editar
  </h4>
  <hr />

  <div class="row justify-content-center">
    <ListaDiagnosticos accion="editar" />
  </div>
</div>
