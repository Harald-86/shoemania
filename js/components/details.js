import { baseUrl } from "../settings/api.js";
import { getTitle } from "./common/getTitle.js";
import { renderProductCard } from "./renderProductCard.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = baseUrl + "products/" + id + "?populate=";

async function renderProduct() {
  try {
    const response = await fetch(url);

    const result = await response.json();

    getTitle(result);
    renderProductCard(result);
  } catch (error) {
    console.log(error, "error");
  }
}
renderProduct();
