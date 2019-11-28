<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from "./layouts/Navbar.svelte";
  import Home from "./pages/Home.svelte";
  import Carts from "./pages/Carts.svelte";
</script>

<style>

</style>

<Router>
  <Navbar />
  <main>
    <!-- <Route path="/" component={Home} /> -->
    <!-- <Route path="about" component={About}/>
<Route path="contact" component={Contact}/> -->
    <Route path="carts" component={Carts} />
    <Route path="/">
      <Home />
    </Route>
  </main>

</Router>
