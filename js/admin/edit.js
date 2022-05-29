import { baseUrl } from "../settings/api.js";
import displayMessage from "../components/common/displayMessage.js";
import createMenu from "../components/common/createMenu.js";

const editProductsUrl = baseUrl + "products";

createMenu();

(async function () {
  const updateProduct = document.querySelector(".edit-products-container");
  try {
    const updateResponse = await fetch(editProductsUrl);
    const updateResult = await updateResponse.json();
    console.log(updateResult);

    updateResult.data.forEach(function (editProd) {
      console.log(editProd.attributes.title);
      updateProduct.innerHTML += `
      <a href="editForm.html?id=${editProd.id}" class="edit-container">
      <img src="${editProd.attributes.image_url}" class="edit-img-thumbnail">
      <h3>${editProd.attributes.title}</h3>
        </div>
        `;
    });
  } catch (error) {
    console.log("error", error);
    displayMessage("error", error, ".edit-container");
  }
})();
