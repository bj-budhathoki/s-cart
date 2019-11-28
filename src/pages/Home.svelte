<script>
  import { products } from "../store/products";
  import Header from "../layouts/Header.svelte";
  import Product from "../components/product.svelte";
</script>

<style>
  .home__products {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<section class="home">
  <Header />
  <div class="home__products">
    {#each $products.slice(0, 4) as product (product.id)}
      <Product {product} />
    {/each}

  </div>
</section>
