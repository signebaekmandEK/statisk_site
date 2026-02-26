const id = 1526;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
  <article class="card">

            <div class="product">
                <h3>PUMA</h3>
                <p class="productdisplayname">${data.productdisplayname}</p>

                <div class="productimg">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="produkt1">
                </div>
            </div>
            
            <div class="rightside">
                <div class="productinfo">
                    <div class="infotext">
                        <p class="info">Brand:</p>
                        <p class="info">Color: </p>
                        <p class="info">Type:</p>
                        <p class="info">Production year:</p>
                        <p class="info">ID:</p>
                    </div>

                    <div class="producttext">
                        <p class="brand">${data.brandname}</p>
                        <p class="color">${data.gender}</p>
                        <p class="type">${data.usagetype}</p>
                        <p class="ProdductionYear">${data.productionyear}</p>
                        <p class="id">${id}</p>
                    </div>
                </div>

                <div class="infobuy">
                    <p class="status">${data.soldout} </p>
                    <br>
                    <p class="size">${data.size}</p>
                    <br>
                    <p class="price">${data.price}</p>
                </div>
                <a class=productsite href="product.html">Buy Now</a>
            </div>
        </article>`;
}

/*`
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="Produktbillede">
    <h2>${data.productdisplayname}</h2>
    <p>Pris: ${data.price}</p> 
    */

getData();
