<script>
  import { cartItems } from "../store/cart";
  import CartItem from "../components/CartItem.svelte";
  let grandTotal = 0;
  $: grandTotal =
    $cartItems &&
    $cartItems.reduce((acc, curr) => {
      return (acc += curr.newPrice);
    }, 0);
  console.log();
</script>

<style>
  .cart-container {
    flex: 1;
    /* background: red; */
    box-shadow: 0rem 0rem 2px 0px #6d6b6b;
    padding: 0.5rem 1rem;
    margin-top: 2rem;
  }
  .cart__header {
    /* background: #ff0; */
    display: flex;
    justify-content: space-between;
    font-size: 8rem;
    font-weight: bold;
  }
  .cart__footer {
    /* background: orangered; */
    display: flex;
    flex-direction: column;
    border-top: 1px solid #d6d6d5;
  }
  .total,
  .checkout {
    display: flex;
    justify-content: space-between;
  }
  .total {
    color: #0e0101;
    font-weight: bold;
    font-size: 8rem;
    margin-bottom: 1rem;
  }
  .checkout {
    background: #3ebfa4;
    padding: 0.5rem 10rem;
    align-self: center;
    color: #fff;
    font-weight: bold;
    font-size: 8rem;
    text-transform: uppercase;
    border-radius: 0.3rem;
  }
</style>

<section class="cart-container">
  <div class="cart__header">
    <p>ORDER</p>
    <p>EDIT CART</p>
  </div>
  {#if $cartItems.length === 0}
    <p>no cart item</p>
  {:else}
    {#each $cartItems as cart}
      <CartItem {cart} />
    {/each}
  {/if}

  <div class="cart__footer">
    <div class="total">
      <p>Total</p>
      <p>Rs. {grandTotal}</p>
    </div>
    <div class="checkout">
      <p>proced to checkout</p>
    </div>
  </div>

</section>
