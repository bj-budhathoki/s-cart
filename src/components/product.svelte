<script>
  import { cartItems } from "../store/cart";
  export let product;

  //add product to cart
  const buyProduct = () => {
    const existingItem =
      $cartItems && $cartItems.find(item => item.id === product.id);
    if (existingItem) {
      $cartItems =
        $cartItems &&
        $cartItems.map(val =>
          val.id === product.id
            ? {
                ...val,
                quantity: val.quantity + 1,
                newPrice: val.newPrice + val.price
              }
            : val
        );
    } else {
      $cartItems = [
        ...$cartItems,
        { ...product, quantity: 1, newPrice: product.price }
      ];
    }
  };
</script>

<style>
  .home__products--item {
    background: #f3f3f3;
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    min-height: 35rem;
    margin: 1rem;
    flex-grow: 1;
    padding: 1rem;
  }
  .home__products--image {
    /* background: #ac6464; */
    box-shadow: 0px 0px 1px #d8d8d8;
    flex: 1;
    position: relative;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .home__products--desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    font-size: 8rem;
    color: #000;
  }
  .buy {
    cursor: pointer;
  }
</style>

<div class="home__products--item">
  <div class="home__products--image">
    <img src={`assest/images/${product.img}`} alt={product.name} />
  </div>
  <div class="home__products--desc">
    <p>{product.name}</p>
    <p class="buy" on:click={buyProduct}>Buy</p>
    <p>Rs. {product.price}</p>
  </div>
</div>
