const clearCart = document.querySelector(".btn-clear-localstorage");

export function clearMyCart() {
  clearCart.onclick = function clearList() {
    localStorage.clear();

    window.location.reload();
  };
}
