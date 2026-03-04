const fetchUrl = `https://kea-alt-del.dk/t7/api/categories`;
const listContainer = document.querySelector(".category_list_container");

function getCategories() {
  fetch(fetchUrl).then((res) => res.json().then((categories) => showCategories(categories)));
}
function showCategories(categories) {
  listContainer.innerHTML = "";

  categories.forEach((category) => {
    listContainer.innerHTML += `

    <a href="productlist.html?category=${encodeURIComponent(category.category)}"" class="categoryy">${category.category}</a>
            
        `;
  });
}

getCategories();
