/*
    .getAttribute() - получение атрибута
    .setAttribute() - добавление атрибута

    .className - свойство, которое позволяет получить и заменить класс элемента
    .classList - это объект, внутри которого есть удобные методы для добавления и удаления класса
    .classList.value - свойство, которое позволяет получить все классы элемента
    .classList.add(className) - метод, который позволяет добавить любой класс к имеющимся классам элемента
    .classList.remove(className) - метод, который позволяет удалить определенный класс элемента
    .classList.toggle(className) - переключает классы. Если есть удаляет, если нет - добавляет. 

    addEventListener() - метод, который позволяет повесить слушатель события на элемент.
    В ответ на события, мы должны делать действия
*/
//      setTimeout(function () {main.classList.add("active")}, 3000) .  - по времени

let main = document.querySelector(".mainClass")
// console.log(main.className);
// main.className += " block"
// console.log(main.classList.add("active"));
// console.log(main.classList.value);

// let btnAdd = document.querySelector(".btnAdd")
// btnAdd.addEventListener("click", function () {
//     main.classList.add("active")
// })

// let btnDelete = document.querySelector(".btnDelete")
// btnDelete.addEventListener("click", function () {
//     main.classList.remove("active")
// })


// setTimeout(function () {
//     main.classList.add("active")
// }, 3000)

// let btn = document.querySelector(".btn")
// btn.addEventListener("click", function () {
//     main.classList.toggle("active")
// })

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers.forEach(function (num) {
//     main.innerHTML += `<p>${num}</p>`


// });
// let texts = document.querySelectorAll("p")

// texts.forEach(text =>{
//     text.addEventListener("click", function () {
//         text.classList.toggle("active-p")
//     })
// });


// let todos = [
//     {
//         name: "вынести мусор"
//     },
//     {
//         name: "проверить дз"
//     },
//     {
//         name: "создать сайт"
//     },
//     {
//         name: "помыть посуду"
//     },
// ]

// todos.forEach(todo => {
//     main.innerHTML += `
//     <div class="todo">
//         <p>${todo.name}</p>
//     </div>
//     `
// });

// let todoClass = document.querySelectorAll(".todo")

// todoClass.forEach(element => {
//     element.addEventListener("click", function () {
//         element.querySelector("p").classList.toggle("line")
//     })
// });



// let todo = document.querySelector(".todo")
// let text = document.querySelector("p")

// todo.addEventListener("click", function () {
//   todo.children[1].innerText = "hhhhhhhhhhh"
// })



// С помощью forEach() создать карточки товаров из массива arr. 
// При нажатии на карточку делать ее фон красным. При втором нажатии возвращать на прежний цвет. 
let arr = [
    {
        name: "Acer",
        price: 50000,
    },
    {
        name: "Asus",
        price: 45000
    },
    {
        name: "HP",
        price: 60000
    }
]

arr.forEach(element => {
    main.innerHTML += `
    <div class="card">
        <h2>${element.name}</h2>
        <p>${element.price}</p>
    </div>
    `
})

let colorDiv = document.querySelectorAll(".card");
colorDiv.forEach(element => {
    element.addEventListener("click", function(){
        element.classList.toggle("activeBG");
    });
});