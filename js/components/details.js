import { baseUrl } from "../settings/api.js";
import { renderProductCard } from "./renderProductCard.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = baseUrl + "products?id=" + id;

async function renderProduct() {
  try {
    const response = await fetch(url);

    const result = await response.json();
    const title = document.querySelector("title");
    result.forEach((tittel) => {
      title.innerHTML = `${tittel.title} | Shoemania`;
    });

    renderProductCard(result);
  } catch (error) {
    console.log(error, "error");
  }
}
renderProduct();
