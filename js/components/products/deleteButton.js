import { baseUrl } from "../../settings/api.js";
import { getToken } from "../../admin/storage/storage.js";

export function deleteButton(id) {
  const deleteContainer = document.querySelector(".delete-container");

  deleteContainer.innerHTML = ` <button type="button" id="delete-btn" class="btn btn-primary delete-strapi">Delete product</button>`;

  const deleteBtn = document.querySelector("#delete-btn");

  deleteBtn.onclick = async function () {
    console.log(id);
    const doDelete = confirm("Are you sure you want to delete this product?");
    console.log(doDelete);

    if (doDelete) {
      const deleteUrl = baseUrl + "products/" + id;
      const deleteToken = getToken();

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${deleteToken}`,
        },
      };

      try {
        const deleteResponse = await fetch(deleteUrl, options);
        const deleteResult = await deleteResponse.json();
        console.log(deleteResult);

        location.href = "../../admin/edit.html";
      } catch (error) {
        console.log(error);
      }
    }
  };
}
