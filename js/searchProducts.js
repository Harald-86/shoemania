import { createProducts } from "./components/createHtml.js";
const productContainer = document.querySelector(".product-section");

export function searchProducts(result) {
  const search = document.querySelector(".search-products");

  search.onkeyup = function () {
    const searchValue = event.target.value.trim().toLowerCase();

    const filterProducts = result.filter(function (prodResult) {
      if (prodResult.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    createProducts(filterProducts);

    if (filterProducts.length == 0) {
      productContainer.innerHTML = `<div>No products found</div>`;
    }
  };
}
