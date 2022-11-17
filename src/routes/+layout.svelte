<script>
  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<Navbar />
<div
  class="container-fluid d-flex align-items-center justify-content-center px-0"
  style="min-height: calc(100vh - 3.5rem - 1px)">
  <slot />
</div>
<Footer />
