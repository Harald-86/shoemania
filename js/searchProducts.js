import { createProducts } from "./components/createHtml.js";
const productContainer = document.querySelector(".product-section");

export function searchProducts(result) {
  const search = document.querySelector(".search-products");

  search.onkeyup = function () {
    const searchValue = event.target.value.trim().toLowerCase();

    for (let i = 0; i < result.data.length; i++) {
      console.log(result.data[i].attributes.title);
      const filterProducts = result.data[i].attributes.title.filter(function (result) {
        if (result.data[i].attributes.title.toLowerCase().startsWith(searchValue)) {
          return true;
        }
      });
      createProducts(filterProducts);
    }

    if (filterProducts.length == 0) {
      productContainer.innerHTML = `<div>No products found</div>`;
    }
  };
}
