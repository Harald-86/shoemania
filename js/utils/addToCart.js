import { getExistingCart } from "../utils/cartFunction.js";

export function addtocart() {
  const buyProduct = document.querySelectorAll(".buy");
  /*  console.log(buyProduct); */

  buyProduct.forEach((buy) => {
    buy.addEventListener("click", handleClick);
  });

  function handleClick() {
    console.log(event);
    const id = this.dataset.id;
    const name = this.dataset.name;
    const price = this.dataset.price;
    const thumbnail = this.dataset.thumbnail;

    const currentCart = getExistingCart();

    const product = { id: id, name: name, price: price, thumbnail: thumbnail };

    currentCart.push(product);
    saveCart(currentCart);
  }
}

export function saveCart(cart) {
  localStorage.setItem("myCart", JSON.stringify(cart));
}
