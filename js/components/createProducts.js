export function createProducts(productResult) {
  const productSection = document.querySelector(".product-section");

  productSection.innerHTML = "<h2>All Products</h2>";

  for (let i = 0; i < productResult.length; i++) {
    productSection.innerHTML += `
      <div class=" col-5 col-sm-6 col-md-6 col-lg-3">
      <a href="details.html?id=${productResult[i].id}">
           <div class="product-card card w-100">
           <img src="${productResult[i].attributes.image_url}" alt="Product image" class="card-img-top product-card-img">
          <div class="card-body">
           <h5>${productResult[i].attributes.title}</h5>
           <p class="card-text">Price: ${productResult[i].attributes.price}</p>
           <a href="details.html?id=${productResult[i].id}" class="btn btn-primary view-product">View</a>
           </div>
           </div>
           </a>
       </div>
      `;
  }
}
