<script>
  import { cartItems } from "../store/cart";
  export let cart;
  let disabled = false;

  const subtractOne = () => {
    if (cart.quantity === 1) {
      disabled = true;
      return;
    } else {
      cart.quantity--;
      cart.newPrice = cart.newPrice - cart.price;
      $cartItems = $cartItems;
      return;
    }
  };
  const addOne = () => {
    cart.quantity++;
    cart.newPrice = cart.newPrice + cart.price;
    $cartItems = $cartItems;
  };
</script>

<style>
  .cart-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #d6d6d5;
    padding: 1rem 0rem;
  }
  .cart-img-container {
    display: flex;
  }
  .cart-img-container .cart-item {
    margin-left: 1rem;
  }
  .cart-item > p:first-child {
    font-weight: bold;
    color: #000;
    font-size: 6rem;
  }
  .cart-img {
    background: red;
    position: relative;
    width: 5rem;
    height: 5rem;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .cart-actions {
    display: flex;
    justify-content: space-between;
  }
  .cart-actions > div {
    margin: 0rem 1rem;
  }
  .cart-subtract {
    color: #a5a2a2;
    cursor: pointer;
    font-size: 10rem;
  }
  .cart-add {
    cursor: pointer;
    color: #6acc7f;
    font-size: 10rem;
  }
  .cart-count {
    border: 1px solid #ccc;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8rem;
  }
  .cart-item-price {
    font-size: 8rem;
  }
</style>

<div class="cart-list">
  <div class="cart-img-container">
    <div class="cart-img">
      <img src={`/assest/images/${cart.img}`} alt={cart.name} />
    </div>
    <div class="cart-item">
      <p>{cart.name}</p>
      <p>delivery 25th jun</p>
    </div>
  </div>
  <div class="cart-actions">
    <div class="cart-subtract" on:click={subtractOne} {disabled}>-</div>
    <div class="cart-count">{cart.quantity}</div>
    <div class="cart-add" on:click={addOne}>+</div>
  </div>
  <div class="cart-item-price">Rs. {cart.newPrice}</div>
</div>
