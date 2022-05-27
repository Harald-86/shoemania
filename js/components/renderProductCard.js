import { addtocart } from "../utils/addToCart.js";

const detailContainer = document.querySelector(".detail-container");

export function renderProductCard(result) {
  for (let i = 0; i < result.data.length; i++) {}
  console.log(result.data.attributes);
  detailContainer.innerHTML = `
  <div class="row">
  <div class="col-12 col-sm-6 col-md-6 detail-img-container">
  
  </div>  
  <div class="col-12 col-sm-6 col-md-6">  
  <h2>${result.data.attributes.title}</h2>
  <p>Price: $ ${result.data.attributes.price}</p>
  <button class="btn btn-primary buy" data-id="${result.data.id}" data-name="${result.data.attributes.title}" data-price="${result.data.attributes.price}">Add to cart</button>
  <a href="../cart.html"><button class="btn btn-primary">Your cart</button></a>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  Product Information
  </button>
  </h2>
  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
  <div class="accordion-body">
  <strong>${result.data.attributes.description}
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  
  `;

  addtocart();
}
/* <img src="${result.data[i].attributes.image.data.attributes.formats.small.url}" class="img-fluid detail-img"> 
 data-thumbnail="${result.data.attributes.image.data.attributes.formats.small.url}"
*/
