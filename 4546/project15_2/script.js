const products = [
  {
    name: "velik",
    price: 40000,
  },
  {
    name: "ski",
    price: 30000,
  },
  {
    name: "sanki",
    price: 20000,
  },
];

const productWrapper = document.querySelector(".products-wrapper");
const productForm = document.querySelector(".product-form");
const productName = document.querySelector('input[name="product-name"]');
const productPrice = document.querySelector('input[name="product-price"]');

//read product
function renderProduct() {
  productWrapper.innerHTML = "";
  products.forEach((product, index) => {
    productWrapper.innerHTML += `
    <div class="product" id="${index}">
    <p class="product-name">${product.name}</p>
    <p class="product-price">${product.price}</p>
    <button class="delete-btn">X</button>
</div>
    `;
  });
  onHover();
  deleteProduct();
}
renderProduct();

//create product. listen submiting form
productForm.addEventListener("submit", function (event) {
  event.preventDefault(); // отмена действий сабмита по умолчанию.  отменяем перезагрущку страницы и довление get данных в адрессной строке
  // console.log(event);
  // console.log(event.target[0].value);
  const newProduct = {
    name: productName.value,
    price: Number(productPrice.value),
  };
  products.unshift(newProduct);

  renderProduct();
  clearInputs();
//   onHover();
//   deleteProduct();
});

function clearInputs() {
  productName.value = "";
  productPrice.value = "";
}

function onHover() {
  const productCards = document.querySelectorAll(".product");
  productCards.forEach(function (card) {
    card.addEventListener("mouseover", function () {
      const deleteBtn = card.querySelector(".delete-btn");
      deleteBtn.style.display = "block";
    });

    card.addEventListener("mouseout", function () {
      const deleteBtn = card.querySelector(".delete-btn");
      deleteBtn.style.display = "none";
    });
  });
}
onHover();

function deleteProduct() {
  const deleteBtns = document.querySelectorAll(".delete-btn");

  deleteBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const id = btn.parentElement.id;
      products.splice(id, 1);
      //   btn.parentElement.remove();
      renderProduct();
      clearInputs();

    });
  });
}

// deleteProduct();
