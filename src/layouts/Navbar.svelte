<script>
  import { cartItems } from "../store/cart";
  import { link } from "svelte-routing";
  let total = 2;
  $: total =
    $cartItems &&
    $cartItems.reduce((acc, curr) => {
      return (acc += curr.quantity);
    }, 0);
</script>

<style>
  .nav {
    display: flex;
    justify-content: flex-end;
    margin: 0.5rem 0rem;
  }
  a {
    margin: 0rem 1rem;
    text-transform: capitalize;
    font-weight: bold !important;
    font-size: 8rem;
  }
  .cartCount {
    background: #ff0000;
    color: #fff;
    /* margin: 0rem 0.5rem; */
    padding: 0.3rem 0.5rem;
    border-radius: 50%;
  }
</style>

<nav class="nav">
  <a use:link href="/">home</a>
  <a use:link href="/about">about</a>
  <a use:link href="/contact">contact</a>
  <a use:link href="/carts">
    cart-
    <span class="cartCount">{total}</span>
  </a>

</nav>
