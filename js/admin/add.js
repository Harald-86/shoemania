import createMenu from "../components/common/createMenu.js";
import displayMessage from "../components/common/displayMessage.js";
import { logout } from "../components/common/logOut.js";

import { baseUrl } from "../settings/api.js";
import { getToken } from "./storage/storage.js";

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");
const featured = document.querySelector("#featured");
const image = document.querySelector("#file");

form.addEventListener("submit", submitProduct);

function submitProduct(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseFloat(price.value);
  const descriptionValue = description.value.trim();
  const featuredValue = featured.checked;

  if (titleValue.length === 0 || priceValue.length === 0 || isNaN(priceValue) || descriptionValue.length === 0) {
    return displayMessage("warning", "Please supply proper values", ".message-container");
  }

  addProduct(titleValue, priceValue, descriptionValue, featuredValue);
}

async function addProduct(title, price, description, featured) {
  const formData = new FormData();

  if (image.files.length === 0) {
    return alert("Please add an image");
  }

  const file = image.files[0];

  const addUrl = baseUrl + "products";

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
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const addResponse = await fetch(addUrl, option);
    const addJson = await addResponse.json();
    console.log(addJson);

    if (addJson.created_at) {
      displayMessage("success", "Product added to store", ".message-container");
      form.reset();
    }
  } catch (error) {
    displayMessage("warning", "Ops something went wrong", ".message-container");
    console.log(error);
  }
}

createMenu();
logout();
