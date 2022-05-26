import { getExistingCart } from "./cartFunction.js";

const theValue = getExistingCart();

export function valueOfCart() {
  const totalValueContainer = document.querySelector(".price-container");
  let sum = 0;

  theValue.forEach((productValue) => {
    sum += parseFloat(productValue.price);
  });

  totalValueContainer.innerHTML = `<div><p>Total : $${sum}</p></div>`;
}
