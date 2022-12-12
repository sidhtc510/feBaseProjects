let form = document.querySelector(".product-form")
let productName = document.querySelector("input[name='product-name']")
let productPrice = document.querySelector("input[name='product-price']")
let productsWrapper = document.querySelector(".products-wrapper")
let productsSearch = document.querySelector("input[name='products-search']")
let notification = document.querySelector(".notification")
let notificationText = document.querySelector(".notification-text")
console.log(notificationText.innerText);


let products = [ // коллекция данных
    { // документ
        name: "bike",
        price: 31000,
        id: Date.now()
    },
    {
        name: "skis",
        price: 35000,
        id: Date.now() + 1
    },
    {
        name: "snowboard",
        price: 19000,
        id: Date.now() + 2
    },
    {
        name: "scooter",
        price: 22000,
        id: Date.now() + 3
    },
]


let clearInputs = () => {
    productName.value = ''
    productPrice.value = ''
}

// function renderProducts()`
//принимает массив в аргументы
//должна для каждого элемента массива отобразить разметку
//

function renderProducts(arr) {
    arr.forEach(function (el) {
        // console.log(index);
        productsWrapper.innerHTML += `
            <div class="product" id=${el.id}>
                <p class="product-name">${el.name}</p>
                <p class="product-price">${el.price}</p>
                <div class="delete-btn" id="">X</div>
            </div>
            `
    });
    // console.log(products);
    // onHover()
    // deleteProduct()

}

//функция отображения кнопки удаления при наведении на весь блок

function onHover() {
    let product = document.querySelectorAll(".product")
    product.forEach(function (el) {
        el.addEventListener("mouseover", function () {
            el.querySelector(".delete-btn").style.display = "block"
        })
        el.addEventListener("mouseout", function () {
            el.querySelector(".delete-btn").style.display = "none"
        })
    });
}

function deleteProduct() {
    let deleteBtns = document.querySelectorAll(".delete-btn")
    deleteBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            btn.parentElement.remove()
            deleteElem(btn.parentElement.getAttribute("id"));
            let notificationText = "item removed";
            showNotification(notificationText, "red");
        })
    })
}





form.addEventListener("submit", function (event) { // параметром передаем информацию о сабмите
    event.preventDefault() // отмена действия по умолчанию (в данном случае отменит перезагрузку страницы после отправки формы (после сабмита))
    let newProduct = { // добавляем в объект введенные в инпут данные
        name: productName.value,
        price: Number(productPrice.value),
        id: Date.now(),
    }
    let notificationText = "item added";
    showNotification(notificationText);
    products.unshift(newProduct) // это тот же push, но в начало массива
    productsWrapper.innerHTML = "" // предварительно очищаем html класс productWrapper
    renderProducts(products) // рендерим все с учетом добавленного объекта
    clearInputs() // очистка инпутов после клика

    onHover()
    deleteProduct()
})

function deleteElem(id) {
    products.forEach(function (el, i) {
        if (el.id == id) {
            products.splice(i, 1)
        }
    })
}




productsSearch.addEventListener('input', function (e) {

    let searchQuery = String(e.target.value);

    let foundProducts = searchProducts(searchQuery);

    // console.log(foundProducts);
    productsWrapper.innerHTML = ``;
    renderProducts(foundProducts);
    onHover()
    deleteProduct()
})

function searchProducts(value) {
    return products.filter(function (product) {
        return product.name.toLowerCase().includes(value);
    })
}

function showNotification(txt, color = "#27ae60") {
    notificationText.innerText = txt;
    notification.style.display = "block";
    notification.style.background = color;

    setTimeout(function () {
        notification.style.display = "none";
    }, 3000)
}


renderProducts(products)
onHover()
deleteProduct()
// console.log(products.at(-1));
// let qq = [10,20,30,40,50]
// qq.length = 2
// console.log(qq);