export function getExistingCart() {
  const cart = localStorage.getItem("myCart");

  if (cart === null) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}
