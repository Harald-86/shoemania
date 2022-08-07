import { baseUrl } from "../settings/api.js";
import displayMessage from "../components/common/displayMessage.js";
import createMenu from "../components/common/createMenu.js";
import { getToken } from "./storage/storage.js";
import { deleteButton } from "../components/products/deleteButton.js";
import { logout } from "../components/common/logout.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const editUrl = baseUrl + "products/" + id;

const editForm = document.querySelector("form");
const editTitle = document.querySelector("#edit-title");
const editPrice = document.querySelector("#edit-price");
const editDescription = document.querySelector("#edit-description");
const editFeatured = document.querySelector("#edit-featured");
const editMessage = document.querySelector(".message-container");
const idInput = document.querySelector("#id");
const editImage = document.querySelector("#edit-file");

createMenu();
logout();
(async function () {
  try {
    const editResponse = await fetch(editUrl);
    const editResult = await editResponse.json();
    console.log(editResult.data.id);

    editTitle.value = editResult.data.attributes.title;
    editPrice.value = editResult.data.attributes.price;
    editDescription.value = editResult.data.attributes.description;
    editFeatured.value = editResult.data.attributes.featured;
    idInput.value = editResult.data.id;

    deleteButton(editResult.data.id);
  } catch (error) {
    console.log(error);
  }
})();

editForm.addEventListener("submit", updateForm);

function updateForm(event) {
  event.preventDefault();

  editMessage.innerHTML = "";

  const titleValue = editTitle.value.trim();
  const priceValue = parseFloat(editPrice.value);
  const descriptionValue = editDescription.value.trim();
  const featuredValue = editFeatured.checked;
  const idValue = idInput.value;

  console.log(idValue);

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  }

  updateProduct(titleValue, priceValue, descriptionValue, featuredValue, idValue);
}

async function updateProduct(title, price, description, featured, id) {
  const formData = new FormData();
  const file = editImage.files[0];
  const url = baseUrl + "products/" + id;

  if (editImage.files.length === 0) {
    return alert("Please add an image");
  }

  const addData = {
    title: title,
    price: price,
    description: description,
    featured: featured,
  };

  formData.append("files.image", file, file.name);
  formData.append("data", JSON.stringify(addData));

  const token = getToken();

  const option = {
    method: "PUT",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, option);
    const result = await response.json();
    console.log(result);
    if (result.data.attributes.createdAt) {
      displayMessage("success", "Product updated", ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
