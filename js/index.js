import { baseUrl } from "./settings/api.js";

import { createMenuIndex } from "./components/common/createMenu.js";
import { createFeatured } from "./components/createFeatured.js";

createMenuIndex();
const productsUrl = baseUrl + "products";
(async function () {
  try {
    const response = await fetch(productsUrl);
    const result = await response.json();

    createFeatured(result);
  } catch (error) {
    console.log("error", error);
  }
})();
