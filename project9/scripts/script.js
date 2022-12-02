// // let user = { } // так создаем объект

// let book = {
//     title: "kolobok",
//     author: "Anatolii",
//     genre: "horror",
//     pages: 370,
//     price: 19999,
//     arr1: ["t1", "t2"],
// }
// console.log(book);


// // let books = [] // так создаем массив
// let books = ["b1", "b2", "b3", ["t1", "t2"]]
// console.log(books);


// let bookt = ["titl", "dram", 1937]
// console.log(bookt[0]);

// let numbers = [0, 1, 2, 3, 4]

// numbers.push(bookt)
// console.log(numbers);



// let var1 = +prompt("enter num 1")
// let var2 = +prompt("enter num 2")
// let var3 = +prompt("enter num 3")

// let nums = [100, 500]
// nums.push(var1, var2, var3)
// console.log(nums);

// let nums = [1, 2, 3, 4, 5]
// console.log(nums);

// for (let i = 0; i < nums.length; i++) { // выведет 0, затем 1, затем 2
//     console.log(nums[i]);
//   }


// for(let i = 1; i <= 5; i++){
//     console.log("100")
// }

// let nums = [1, 2, 3, 4, 5]

//

// for (let i = 0; i <= 100; i++) {
//     console.log(i)
//     if (i == 32) {
//         console.log(i)
//     }
// }

// let nums = [10, 20, 30, 40, 50]
// console.log(nums[0]);

// for (let i = 0; i < nums.length; i++) { // выведет 0, затем 1, затем 2
//     console.log(nums[i]);
// }

// let arrrr = [32, 51, 60, 78, 105, 14, 10]

// for (let i = 0; i < arrrr.length; i++) {
//     if (arrrr[i] >= 50) {
//         console.log(arrrr[i]);
//     }
// }


// ДЗ.1. Есть массив [-10, 50, 60, 0, -100, 125]. Вывести в консоль только + числа. 
// ДЗ.2. Есть массив [11, 12, 15, 17, 18, 25, 26]. Вывести в консоль только четные числа 10 % 2 = 0
// ДЗ.3  Есть массив [10, 20, 30 ,40 , 50, 60]. Найти сумму чисел в массив и вывести их в консоль. sum + arr[i] 
// ДЗ.4. Есть массив [-10, 50, 60, 0, -100, 125]. Найти произведение отрицательных чисел
/* ДЗ.5     Запросить 10 чисел.      
let num1 = +prompt("enter num 1")     
let num2 = +prompt("enter num 2")     
let num3 = +prompt("enter num 3")      l
let nums = [100, 500] // 700, 1000, 500 --> [100, 500, 700, 1000, 500]     
nums.push(num1, num2, num3)     
console.log(nums); */


// HW 1
// let arr = [-10, 50, 60, 0, -100, 125]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         console.log(arr[i]);
//     }
// }


// HW 2
// let arr2 = [11, 12, 15, 17, 18, 25, 26, 8, 134]

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 == 0) {
//         console.log(arr2[i])
//     }
// }


// HW 3
// let arr3 = [10, 20, 30 ,40 , 50, 60]
// let sum = 0
// for(let i = 0; i < arr3.length; i++){
//     sum += arr3[i];
// }
// console.log(sum);

//HW 4 .   ---                    интересует правильность решения

// let arr4 = [-10, 50, 60, 0, -100, 125]
// let negative = []
// let total = 1
// for (let i = 0; i < arr4.length; i++) {
//     if (arr4[i] < 0) {
//         negative.push(arr4[i])
//     }
// }

// for(let i = 0; i < negative.length; i++){
//     total *= negative[i] 
// }
// console.log(total)



//HW 4 не мой вариант
// let num = [-10, 50, 60, 0, -100, 125]
// let mult = 1

// for (let i = 0; i < num.length; i++) {
//     if (num[i] < 0) {
//         mult *= num[i]
//     }
// }
// console.log(mult);


//HW 5
// let nums = []
// for(let i = 1; i <= 10; i++){
//     nums.push(+prompt("введи число"))
// }
// console.log(nums);


// ОБЪЕКТЫ

// let laptop = {
//     color: "white",
//     mark: "acer",
//     model: "aspire",
//     size: "15.6",
//     tech: {
//         ozu: "16gb",
//         processor: "intel",
//         videocard: "nvidia",
//     },
//     price: 999,
// }

// console.log(`
// <div class="laptop">
// <h1>model: ${laptop.model}</h1>
// <p>color:  ${laptop.color}</p>
// <p>price:  ${laptop.price}</p>
// </div>
// `)





// let laptops = [
//     {
//         color: "white",
//         mark: "acer",
//         model: "aspire",
//         size: "15.6",
//         tech: {
//             ozu: "16gb",
//             processor: "intel",
//             videocard: "nvidia",
//         },
//         price: 999,
//     },

//     {
//         color: "black",
//         mark: "Apple",
//         model: "MacBook Air",
//         size: "13.3",
//         tech: {
//             ozu: "8gb",
//             processor: "m1",
//             videocard: "on the chip",
//         },
//         price: 1100,
//     }
// ]


// for(let i = 0; i < laptops.length; i++){
//     console.log(`
// <div class="laptop">
//     <h1>model: ${laptops[i].model}</h1>
//     <p>color:  ${laptops[i].color}</p>
//     <p>price:  ${laptops[i].price}</p>
//     <p>processor:  ${laptops[i].tech.processor}</p>
// </div>
//     `)
// }





// let instaPost = [
//     {
//         title: "my photo",
//         descr: "description",
//         author: "sidhtc510",
//         likes: 100,
//         img: "./img/frame.png"
//     },
//     {
//         title: "your photo",
//         descr: "lorem 4",
//         author: "anotherAuthot",
//         likes: 222,
//         img: "./img/frame.png"
//     },
//     {
//         title: "next photo",
//         descr: "lorem 4343",
//         author: "anotherAuthot",
//         likes: 123,
//         img: "./img/frame.png"
//     },
//     {
//         title: "next photo 2",
//         descr: "chuvak 4343",
//         author: "anotherAuthot",
//         likes: 157,
//         img: "./img/frame.png"
//     },
// ]


// for (let i = 0; i < instaPost.length; i++) {
//     if (instaPost[i].likes > 150) {
//         console.log(`
//         <div class="insta-post">
//             <h1>${instaPost[i].title}</h1>
//             <p>${instaPost[i].descr}</p>
//             <p>${instaPost[i].author}</p>
//             <p>${instaPost[i].likes}</p>
//             <img src="${instaPost[i].img}" alt="photo"></img>
//         </div>
// `);
//     }
// }

//  *************************************** 10 nov 22 *****************************************









// task#1

// вывести в консоль
// все ноутбуки с разметкой html
// все ноуты цена которых выше 40 000
// посчитать сумму всех ноутов
// let laptops = [
//     {
//         mark: "Acer",
//         price: 25000,
//     },
//     {
//         mark: "Apple",
//         price: 37000,
//     },
//     {
//         mark: "Asus",
//         price: 125000,
//     },
//     {
//         mark: "HP",
//         price: 42000,
//     },
//     {
//         mark: "Samsung",
//         price: 52000,
//     },
// ]


// let sum_dz1 = 0

// for (i = 0; i < laptops.length; i++) {
//     if (laptops[i].price > 40000) {
//         console.log(`
//         <p>mark: ${laptops[i].mark}</p>
//         <p>price: ${laptops[i].price}</p>
//     `);
//     }
//     sum_dz1 += laptops[i].price
// }
// console.log(`
// <p>amount: ${sum_dz1}</p>
// `);





// Задача.2
// а) Вывести все ноутбуки, у которых есть категория "laptop"
// б) Вывести все ноутбуки, у которых категория "premium"
// в) Вывести все ноутбуки, у которых категория "tech"
// let laptopsSecond = [
//     {
//         mark: "Acer",
//         category: ["laptop", "tech"],
//         price: 25000
//     },
//     {
//         mark: "Apple",
//         category: ["notebook", "tech"],
//         price: 37000
//     },
//     {
//         mark: "Asus",
//         category: ["computer", "premium"],
//         price: 125500,
//     },
//     {
//         mark: "HP",
//         category: ["computer", "tech"],
//         price: 42000
//     },
//     {
//         mark: "Samsung",
//         category: ["notebook", "premium"],
//         price: 52000
//     },
//     {
//         mark: "Lenovo",
//         category: ["tech", "computer"],
//         price: 57000
//     },
//     {
//         mark: "xiaomi",
//         category: ["premium", "laptop"],
//         price: 59000
//     }
// ]

// for (let i = 0; i < laptopsSecond.length; i++) {
//     for (let x = 0; x < laptopsSecond[i].category.length; x++) {
//         if (laptopsSecond[i].category[x] == "laptop") {
//             console.log(`
//                     <div class="laptops">
//                         <h1> laptop </h1>
//                         <p>Mark: ${laptopsSecond[i].mark}</p>
//                         <p>category:  ${laptopsSecond[i].category}</p>
//                         <p>price:  ${laptopsSecond[i].price}</p>
//                     </div>
//             `)
//         }
//     }

// }

// проблема: 
// попытка вывести категории premium и tech.
// после if делаю else if, либо дублирую весь внутренний цикл (изменяю только наименование категории)
// выводит в неотсортированном виде
// нужно что бы выводило ноуты принадлежащие к определенной категории 










// Задача 3.
// Запрашивать у пользователя Марку и Цену ноутбука три раза.
// Марку и цену ноутбука объединять в объект и добавлять(push) в массив laptops=[]-пустой
// Итого будет массив из трех объектов.


//рабочий вариант который не особо нравится
// let laptopsThird_1 = []

// for (let i = 0; i < 3; i++) {

//     mark = prompt("введи марку ноута")
//     price = +prompt("введи цену ноута")

//     laptopsThird_1.push({"mark" : mark, "price" : price})

// }

// console.log(laptopsThird_1);


//вариант 2 - тот, не рабочий вариант, который отправил Арсену для проверки
// let laptopsThird_2 = []
// let simple = {}
// for (let i = 0; i < 3; i++) {

//     simple.mark = prompt("введи марку ноута")
//     simple.price = +prompt("введи цену ноута")

//     laptopsThird_2.push(simple)

// }

// console.log(laptopsThird_2);


//вариант 3 - не мой вариант. отрабатывает отлично, но есть вопрос: каким образом в объект записываются правильные наименования ключей
// let laptopsThird_3 = []
// for (let i = 0; i < 3; i++) {
//     let mark = prompt("Введите Марку");
//     let price = +prompt("Введите цену"); 
//     laptopsThird_3.push({mark, price})
// }

// console.log(laptopsThird_3)



// Задача 4. 
// У пользователя с prompta запрашивать марку/цену. // По его ответу в консоли ввыводить ноутбуки с разметкой.
// Какую марку вы бы хотели? -Acer. Выводим хар-ки ACer
// На какую цену вы рассчитываете? -50000. Выводить все ноутбуки, которые удовл-т(меньше) этой цене


// let laptopsFourth = [
//     {
//         mark: "acer",
//         category: ["laptop", "tech"],
//         price: 25000
//     },
//     {
//         mark: "acer",
//         category: ["laptop", "tech"],
//         price: 38000
//     },
//     {
//         mark: "apple",
//         category: ["notebook", "tech"],
//         price: 37000
//     },
//     {
//         mark: "asus",
//         category: ["computer", "premium"],
//         price: 125500,
//     },
//     {
//         mark: "asus",
//         category: ["computer", "tech"],
//         price: 42000
//     },
//     {
//         mark: "acer",
//         category: ["notebook", "premium"],
//         price: 49000
//     }
// ]



// let mark_hw4 = prompt("Какую марку вы бы хотели? (acer, apple, asus, hp, samsung)")
// let price_hw4 = +prompt("На какую цену вы рассчитываете?")

//вариант который выведет все по наименованию и потом все до определенной цены
// for (let i = 0; i < laptopsFourth.length; i++) {
//     if (laptopsFourth[i].mark == mark_hw4) {
//         console.log(laptopsFourth[i]);
//     };

//     if (laptopsFourth[i].price <= price_hw4) {
//         console.log(laptopsFourth[i]);
//     }
// };

//вариант который выведет все по наименованию и до определенной цены именно данного ноута
// for (let i = 0; i < laptopsFourth.length; i++) {
//     if (laptopsFourth[i].mark == mark_hw4 && laptopsFourth[i].price <= price_hw4) {
//         console.log(laptopsFourth[i]);
//     };
// };


// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// let a = []

// for (let i = 0; i < 10; i++) {
//     a.push({name:"tolik", age:"17"})
// }

// console.log(a)



// let arr = [1, 2, 4, -40, "string", -3, 8, 7, 0, -5, 18, 12]
// let negSum = []
// let posSum = []
// let rest = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         posSum.push(arr[i])
//     } else if (arr[i] < 0) {
//         negSum.push(arr[i])
//     } else {
//         rest.push(arr[i])
//     }
// }
// let arrr = [posSum, negSum, rest]
// console.log(arrr)




// let arr = [5, 2, 4, -3, 1, 7, 0, -5, 18, 12];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     let iterElement = arr[i];
//     sum += iterElement;
//     if (sum > 10) {
//         console.log(`сумма превысила 10 на ${i + 1} итерации`)
//         sum = sum * 0
//     }
// }



// hw5 //найти самую маленькую и потом самую большую зарплату
// let arr = [

//     { 'salary': 49, 'name': 'alex' },
//     { 'salary': 1200, 'name': 'alex' },
//     { 'salary': 100, 'name': 'alex' },
//     { 'salary': 60, 'name': 'alex' },
//     { 'salary': 48, 'name': 'ivan' },
//     { 'salary': 200, 'name': 'petr' },
//     { 'salary': 1800, 'name': 'petr' },
//     { 'salary': 95, 'name': 'petr' },
//     { 'salary': 50, 'name': 'petr' },

// ]

// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i].salary)
// }
// console.log(sum)


// let max = 0
// for (let j = 0; j < arr.length; j++) {
//     if (arr[j].salary > max) {
//         max = Number(arr[j].salary)
//     }
// }
// console.log(max);



// let min = max
// for (let x = 0; x < arr.length; x++) {
//     if (min > arr[x].salary) {
//         min = arr[x].salary
//     }
// }
// console.log(min);