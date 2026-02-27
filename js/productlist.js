const listURL = "https://kea-alt-del.dk/t7/api/products?articletype=Backpacks";
const listContainer = document.querySelector(".product-list-container");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `
<article class="product-card">

                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="produkt1">
                    <h3>${product.brandname}</h3>

                    <p class="productdisplayname">${product.productdisplayname}</p>
                    <p class="category">${product.subcategory}</p>

                    <p class="price">${product.price} KR.</p>

                    <a class="productsite" href="product.html">Buy Now</a>

                </article>`;
  });
}

getProducts();
