import { addtocart } from "../utils/addToCart.js";

const detailContainer = document.querySelector(".detail-container");

export function renderProductCard(result) {
  result.forEach(function (render) {
    detailContainer.innerHTML = `
    <div class="row">
    <div class="col-12 col-sm-6 col-md-6 detail-img-container">
    <img src="http://localhost:1337${render.image.url}" class="img-fluid detail-img">
    </div>  
    <div class="col-12 col-sm-6 col-md-6">  
    <h2>${render.title}</h2>
    <p>Price: $ ${render.price}</p>
    <button class="btn btn-primary buy" data-id="${render.id}" data-name="${render.title}" data-price="${render.price}" data-thumbnail="${render.image.url}">Add to cart</button>
    <a href="../cart.html"><button class="btn btn-primary">Your cart</button></a>
    <div class="accordion" id="accordionExample">
    <div class="accordion-item">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    Product Information
    </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
    <div class="accordion-body">
    <strong>${render.description}
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    `;
  });
  /// add to cart
  /*   const buyProduct = document.querySelectorAll(".buy");
  console.log(buyProduct);

  buyProduct.forEach((buy) => {
    buy.addEventListener("click", handleClick);
  });

  function handleClick() {
    console.log(event);
    const id = this.dataset.id;
    const name = this.dataset.name;
    const price = this.dataset.price;
    const thumbnail = this.dataset.thumbnail;

    const currentCart = getExistingCart();

    const product = { id: id, name: name, price: price, thumbnail: thumbnail };

    currentCart.push(product);
    saveCart(currentCart);
  }

  function saveCart(cart) {
    localStorage.setItem("myCart", JSON.stringify(cart));
  } */

  addtocart();
}
