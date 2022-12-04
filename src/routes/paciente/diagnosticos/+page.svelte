<script>
  import ListaDiagnosticos from '$lib/components/ListaDiagnosticos.svelte'
</script>

<div class="col-lg-7 col-md-8 col-sm-11 col p-4">
  <h1 class="text-center display-5">Diagnósticos generados</h1>
  <h4 class="text-center">Lista de diagnósticos generados por el paciente</h4>
  <hr />

  <div class="row justify-content-center">
    <ListaDiagnosticos />
  </div>
</div>
