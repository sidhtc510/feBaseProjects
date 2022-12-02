// let item = document.querySelector("main")

// console.log(item.innerText);
// console.log(item.innerHTML);

// item.innerHTML += "<h2>hello</h2>"


let main = document.querySelector("main")

// let myname = "Tolik"

// main.innerHTML += `<p>${myname}</p>`

// for (let i = 0; i < 5; i++) {
//     main.innerHTML += `<p>hello${i + 1}</p>`
// } 

// let link = "https://google.com"
// let linkName = "google"

// main.innerHTML += `<a href="${link}">${linkName}</a>`

// let laptop = {
//     mark : "acer",
//     model : "g444",
//     price : 15000
// }

//     main.innerHTML += `
//                                         <div>
//                                             <h1>${laptop.mark}</h1>
//                                             <p>${laptop.model}</p>
//                                             <p>${laptop.price}</p>
//                                         </div>
//                                       `

// let book = {
//     name : "kolobok",
//     author : "tolik",
//     count : 700,
// }

// main.innerHTML += `
//                                          <div>
//                                              <h1>${book.name}</h1>
//                                              <p>${book.author}</p>
//                                              <p>${book.count}</p>
//                                          </div>
//                                        `


let laptops = [
    {
        mark: "acer",
        model: "g444",
        price: 15000
    },
    {
        mark: "asus",
        model: "705",
        price: 25000
    },
    {
        mark: "apple",
        model: "m1",
        price: 85000
    },
]

// for (let i = 0; i < laptops.length; i++) {
//     main.innerHTML +=
//         `
//                                     <div class="laptop">
//                                         <h1>${laptops[i].mark}</h1>
//                                         <p class="model">${laptops[i].model}</p>
//                                         <p class="price">${laptops[i].price}</p>
//                                     </div>
//                                 `
// }

laptops.forEach(function (element) {
    main.innerHTML +=
        `
                                <div class="laptop">
                                    <h1>${element.mark}</h1>
                                    <p class="model">${element.model}</p>
                                    <p class="price">${element.price}</p>
                                </div>
                            `
});

// let arr = [2, 4, 6, 8, 10]
// arr.forEach(function(element){
//      element += 2
//     console.log(element);
// })

// console.log(arr);

let arr = ["a", "b", "c", "d"]

arr.forEach(function (name) {
    console.log("hello " + name);
})

// Есть массив объектов
 let cars = [
    {
        mark : "Mercedes-Benz",
        model : "S600",
        year : "2005",
        price : 50000
    }, 
    {
        mark : "BMW",
        model : "M5",
        year : "2010",
        price : 30000
    },
    {
        mark : "VW",
        model : "Golf5",
        year : "2015",
        price : 25000
    },
    {
        mark : "Toyota",
        model : "Camry",
        year : "2015",
        price : 25000
    }
 ] 

//  Для каждого из элементов массива отобразить разметку
//  <div class="car">  
//     <h1>Mark Model</h1>
//     <p>Год выпуска: year</p>
//     <p>Цена: price</p>
//  </div>

cars.forEach(function (car) {
    main.innerHTML +=
        `<div class="car">
            <h1>назавнаие: ${car.mark} ${car.model}</h1>
            <p>Год выпуска: ${car.year}</p>
            <p>Цена:  ${car.price}</p>
         </div>
`})