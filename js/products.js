import { baseUrl } from "./settings/api.js";
import createMenu from "./components/common/createMenu.js";
/* import { createFeatured } from "./components/createFeatured.js"; */
import { createProducts } from "./components/createProducts.js";
import { searchProducts } from "./searchProducts.js";

createMenu();
const productsUrl = baseUrl + "products/";

(async function () {
  try {
    const productResponse = await fetch(productsUrl);
    const productResult = await productResponse.json();

    createProducts(productResult.data);
    searchProducts(productResult.data);
  } catch (error) {
    console.log(error);
  }
})();
