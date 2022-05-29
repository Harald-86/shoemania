import { getExistingCart } from "./cartFunction.js";

const myCart = getExistingCart();
const myShoppingCart = document.querySelector(".cart-container");

export function generateCart() {
  myShoppingCart.innerHTML = "";
  if (myCart.length === 0) {
    myShoppingCart.innerHTML = `
    
    <p class="empty-cart">You have no products in your cart</p>
    <a href="products.html" class="cart-to-products">View products</a>
    `;
  }

  myCart.forEach((shoppingCart) => {
    console.log(shoppingCart.thumbnail);
    myShoppingCart.innerHTML += `
    <div class="item-in-cart">
    <a href="details.html?id=${shoppingCart.id}" >
    <img src="${shoppingCart.thumbnail}" alt="product image added to the cart" class="cart-thumbnail">
    </a>
    <h4 class="cart-name">${shoppingCart.name}</h4>
    <p class="cart-price">Price: $${shoppingCart.price}</p>
    <span><i class="bi bi-trash3 remove-item" data-trash="${shoppingCart.id}"></i></span>
    </div>
    `;
  });
}
