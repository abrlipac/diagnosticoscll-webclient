<script>
  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<Navbar />
<div class="row container-fluid" style="min-height: calc(100vh - 3.5rem - 1px)">
  <slot />
</div>
<Footer />

<style>
  .container-fluid {
    background-image: url('img/bg.png');
    background-size: cover;
  }
</style>
