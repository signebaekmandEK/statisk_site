const id = 1526;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `  <h2>Accessories</h2>
  <section class="product-list-container">

                <article class="product-card">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="produkt1">
                    <h3>${data.brandname}</h3>

                    <p class="productdisplayname">${data.productdisplayname}</p>
                    <p class="category">${data.subcategory}</p>

                    <p class="price">${data.price} KR.</p>

                    <a class="productsite" href="product.html">Buy Now</a>

                </article>
                 <article class="product-card">

                <div class="sale-product">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/1525.webp" alt="produkt1" style="width:100%;">
                    <div class="centered">SALE 55%</div>
                </div>

                <h3>PUMA</h3>
                <p class="productdisplayname">Deck Navy Blue Backpack</p>
                <p class="category">Bag</p>
                <p class="price">Now 1299 KR.</p>
                <a class="productsite" href="product.html">Buy Now</a>
            </article>

            <article class="product-card">
                <div class="soldout-product">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/1532.webp" alt="produkt2" style="width:100%;">
                    <div class="blured">SOLD OUT</div>
                </div>

                <h3>PUMA</h3>
                <p class="productdisplayname">Grey Leaping Cat T-shirt</p>
                <p class="category">T-shirt</p>

                <p class="price">899 KR.</p>
                <p class="product-status">${data.stock ? "In Stock" : "Out of Stock"}</p>

                <a class="productsite" href="product.html">SOLD OUT</a>
            </article>

            <article class="product-card">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/1531.webp" alt="produkt1">

                <h3>PUMA</h3>
                <p class="productdisplayname">Grey Solid Round Neck T-Shirt</p>
                <p class="category">T-shirt</p>

                <p class="price">799 KR.</p>

                <a class="productsite" href="product.html">Buy Now</a>
            </article>

            <article class="product-card">

                <img src="https://kea-alt-del.dk/t7/images/webp/640/1526.webp" alt="produkt1">
                <h3>PUMA</h3>

                <p class="productdisplayname">Big Cat Backpack Black</p>
                <p class="category">Bag</p>
                <p class="price">1299 KR.</p>

                <a class="productsite" href="product.html">Buy Now</a>

            </article>

            <article class="product-card">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/1531.webp" alt="produkt1">

                <h3>PUMA</h3>
                <p class="productdisplayname">Grey Solid Round Neck T-Shirt</p>
                <p class="category">T-shirt</p>
                <p class="price">799 KR.</p>
                <a class="productsite" href="product.html">Buy Now</a>
            </article>
            <article class="product-card">

                <img src="https://kea-alt-del.dk/t7/images/webp/640/1526.webp" alt="produkt1">
                <h3>PUMA</h3>

                <p class="productdisplayname">Big Cat Backpack Black</p>
                <p class="category">Bag</p>

                <p class="price">1299 KR.</p>

                <a class="productsite" href="product.html">Buy Now</a>

            </article>

            <article class="product-card">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/1531.webp" alt="produkt1">

                <h3>PUMA</h3>
                <p class="productdisplayname">Grey Solid Round Neck T-Shirt</p>
                <p class="category">T-shirt</p>

                <p class="price">799 KR.</p>
                <a class="productsite" href="product.html">Buy Now</a>
            </article>
        </section>`;
}

getData();
