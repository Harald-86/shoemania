import { saveCart } from "./addToCart.js";
import { getExistingCart } from "./cartFunction.js";

const theExistingCart = getExistingCart();
console.log(theExistingCart);

export function removeFromCart() {
  const trashCans = document.querySelectorAll(".remove-item");

  trashCans.forEach(function (can) {
    can.addEventListener("click", handleTrash);
  });
}

function handleTrash() {
  console.log(event.target.dataset.trash);
  const id = event.target.dataset.trash;
  const newCart = theExistingCart.filter((prod) => prod.id !== id);
  console.log(newCart);
  saveCart(newCart);

  getExistingCart(saveCart);
  document.location.reload();
}
