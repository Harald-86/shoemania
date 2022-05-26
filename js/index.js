import { baseUrl } from "./settings/api.js";
import { createFeatured, createProducts } from "./components/createHtml.js";
import { searchProducts } from "./searchProducts.js";
import { createMenuIndex } from "./components/common/createMenu.js";

createMenuIndex();
const productsUrl = baseUrl + "products";
(async function () {
  try {
    const response = await fetch(productsUrl);
    const result = await response.json();

    createFeatured(result);
    createProducts(result);
    searchProducts(result);
  } catch (error) {
    console.log("error", error);
  }
})();
