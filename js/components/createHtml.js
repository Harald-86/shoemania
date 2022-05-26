const featuredSection = document.querySelector(".featured-section");
const productSection = document.querySelector(".product-section");

export function createFeatured(result) {
  featuredSection.innerHTML = "<h2>Featured</h2>";

  for (let i = 0; i < result.data.length; i++) {
    if (result.data[i].attributes.featured === true) {
      featuredSection.innerHTML += `



      <div class=" col-11 col-sm-6 col-md-6 col-lg-3">
      <a href="details.html?id=${result.data[i].id}">
           <div class="product-card card w-100">
           <img src="${result.data[i].attributes.image.data.attributes.formats.small.url}" alt="Product image" class="card-img-top product-card-img">
          <div class="card-body">
           <h5>${result.data[i].attributes.title}</h5>
           <p class="card-text">Price: ${result.data[i].attributes.price}</p>
           <a href="details.html?id=${result.data[i].id}" class="btn btn-primary view-product">View</a>
           </div>
           </div>
           </a>
       </div>
    
     
       `;
    }
  }
}

export function createProducts(result) {
  productSection.innerHTML = "<h2>All Products</h2>";

  for (let i = 0; i < result.data.length; i++) {
    productSection.innerHTML += `
      <div class=" col-11 col-sm-6 col-md-6 col-lg-3">
      <a href="details.html?id=${result.data[i].id}">
           <div class="product-card card w-100">
           <img src="${result.data[i].attributes.image.data.attributes.formats.small.url}" alt="Product image" class="card-img-top product-card-img">
          <div class="card-body">
           <h5>${result.data[i].attributes.title}</h5>
           <p class="card-text">Price: ${result.data[i].attributes.price}</p>
           <a href="details.html?id=${result.data[i].id}" class="btn btn-primary view-product">View</a>
           </div>
           </div>
           </a>
       </div>
      `;
  }
}
