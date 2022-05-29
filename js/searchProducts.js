import { createProducts } from "./components/createProducts.js";

const productContainer = document.querySelector(".product-section");

export function searchProducts(result) {
  const search = document.querySelector(".search-products");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filterProducts = result.filter(function (prodResult) {
      if (prodResult.attributes.title.trim().toLowerCase().includes(searchValue)) {
        return true;
      }
    });
    createProducts(filterProducts);

    if (filterProducts.length == 0) {
      productContainer.innerHTML = `<div class="no-result">No products found</div>`;
    }
  };
}
