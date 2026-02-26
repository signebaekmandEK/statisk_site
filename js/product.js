const id = 1526;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#product");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `<section class="card">

           
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" class="productimg">
            
                 <div class="block">
                 <div class="product">
                    <h3>${data.brandname}</h3>
                    <p class="productdisplayname">${data.productdisplayname}</p>
                    <p class="size">ONE SIZE</p>
                    <p class="price"> Price: ${data.price} KR.</p>
                    <a class="productsite" href="product.html">Buy Now</a>
                    <br>
                    <br>
                    <p class="product-status">${data.stock ? "Out of Stock" : "In Stock"}</p>
                </div>
                
                <div class="productinfo">
                 <div class="description">
                 <p class="id">ID:</p>
                 <p class="brand">Brand:</p>
                 <p class="type">Type:</p>
                 <p class="ProductionYear">Productionyear:</p>
                 </div>
                 <div class="datadescription">
                 <p class="id">${id}</p>
                 <p class="brand">${data.brandname}</p>
                 <p class="type">${data.usagetype}</p>
                 <p class="ProductionYear">${data.productionyear}</p>
                </div>
                </div>
                 </div>
        </section>`;
}

getData();
