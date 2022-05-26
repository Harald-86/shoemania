const featuredSection = document.querySelector(".featured-section");
const productSection = document.querySelector(".product-section");

export function createFeatured(result) {
  featuredSection.innerHTML = "<h2>Featured</h2>";

  result.forEach(function (createProduct) {
    if (createProduct.featured === true) {
      featuredSection.innerHTML += `



       <div class=" col-11 col-sm-6 col-md-6 col-lg-3">
       <a href="details.html?id=${createProduct.id}">
            <div class="product-card card w-100">
                <img src="http://localhost:1337${createProduct.image.url}" alt="${createProduct.image.alternativeText}" class="card-img-top product-card-img">
            <div class="card-body">
            <h5>${createProduct.title}</h5>
            <p class="card-text">Price: $${createProduct.price}</p>
            <a href="details.html?id=${createProduct.id}" class="btn btn-primary view-product">View</a>
            </div>
            </div>
            </a>
        </div>
     
      
        `;
    }
  });
}

export function createProducts(result) {
  productSection.innerHTML = "<h2>All Products</h2>";

  result.forEach(function (createAllProducts) {
    productSection.innerHTML += `
    <div class=" col-11 col-sm-6 col-md-6 col-lg-3">
    <a href="details.html?id=${createAllProducts.id}">
            <div class="product-card card w-100">
                <img src="http://localhost:1337${createAllProducts.image.url}" alt="${createAllProducts.image.alternativeText}" class="card-img-top product-card-img">
            <div class="card-body">
            <h5>${createAllProducts.title}</h5>
            <p class="card-text">Price: $${createAllProducts.price}</p>
            <a href="details.html?id=${createAllProducts.id}" class="btn btn-primary view-product">View</a>
           
            </div>
            </div>
            </a>
        </div>
    `;
  });
}
