//  *************************************** 10 nov 22 *****************************************


// task#1

// вывести в консоль
// все ноутбуки с разметкой html
// все ноуты цена которых выше 40 000
// посчитать сумму всех ноутов
let laptops = [
    {
        mark: "Acer",
        price: 25000,
    },
    {
        mark: "Apple",
        price: 37000,
    },
    {
        mark: "Asus",
        price: 125000,
    },
    {
        mark: "HP",
        price: 42000,
    },
    {
        mark: "Samsung",
        price: 52000,
    },
]


let sum_dz1 = 0

for (i = 0; i < laptops.length; i++) {
    if (laptops[i].price > 40000) {
        console.log(`
        <p>mark: ${laptops[i].mark}</p>
        <p>price: ${laptops[i].price}</p>
    `);
    }
    sum_dz1 += laptops[i].price
}
console.log(`
<p>amount: ${sum_dz1}</p>
`);





// Задача.2
// а) Вывести все ноутбуки, у которых есть категория "laptop"
// б) Вывести все ноутбуки, у которых категория "premium"
// в) Вывести все ноутбуки, у которых категория "tech"



let laptopsSecond = [
    {
        mark: "Acer",
        category: ["laptop", "tech"],
        price: 25000
    },
    {
        mark: "Apple",
        category: ["notebook", "tech"],
        price: 37000
    },
    {
        mark: "Asus",
        category: ["computer", "premium"],
        price: 125500,
    },
    {
        mark: "HP",
        category: ["computer", "tech"],
        price: 42000
    },
    {
        mark: "Samsung",
        category: ["notebook", "premium"],
        price: 52000
    },
    {
        mark: "Lenovo",
        category: ["tech", "computer"],
        price: 57000
    },
    {
        mark: "xiaomi",
        category: ["premium", "laptop"],
        price: 59000
    }
]


console.log("....laptop....");
for (let i = 0; i < laptopsSecond.length; i++) {
    for (let x = 0; x < laptopsSecond[i].category.length; x++) {
        if (laptopsSecond[i].category[x] == "laptop") {
            console.log(`
                    <div class="laptops">
                        <h1> laptop </h1>
                        <p>Mark: ${laptopsSecond[i].mark}</p>
                        <p>category:  ${laptopsSecond[i].category}</p>
                        <p>price:  ${laptopsSecond[i].price}</p>
                    </div>
            `)
        }
    }

}

console.log("....tech....");
for (let i = 0; i < laptopsSecond.length; i++) {
    for (let x = 0; x < laptopsSecond[i].category.length; x++) {
        if (laptopsSecond[i].category[x] == "tech") {
            console.log(`
                    <div class="laptops">
                        <h1> laptop </h1>
                        <p>Mark: ${laptopsSecond[i].mark}</p>
                        <p>category:  ${laptopsSecond[i].category}</p>
                        <p>price:  ${laptopsSecond[i].price}</p>
                    </div>
            `)
        }
    }

}

console.log("....premium....");
for (let i = 0; i < laptopsSecond.length; i++) {
    for (let x = 0; x < laptopsSecond[i].category.length; x++) {
        if (laptopsSecond[i].category[x] == "premium") {
            console.log(`
                    <div class="laptops">
                        <h1> laptop </h1>
                        <p>Mark: ${laptopsSecond[i].mark}</p>
                        <p>category:  ${laptopsSecond[i].category}</p>
                        <p>price:  ${laptopsSecond[i].price}</p>
                    </div>
            `)
        }
    }

}











// Задача 3.
// Запрашивать у пользователя Марку и Цену ноутбука три раза.
// Марку и цену ноутбука объединять в объект и добавлять(push) в массив laptops=[]-пустой
// Итого будет массив из трех объектов.


//рабочий вариант который не особо нравится
let laptopsThird_1 = []

for (let i = 0; i < 3; i++) {

    mark = prompt("введи марку ноута")
    price = +prompt("введи цену ноута")

    laptopsThird_1.push({ "mark": mark, "price": price })

}

console.log(laptopsThird_1);


//вариант 2 - тот, не рабочий вариант, который отправил Арсену для проверки
let laptopsThird_2 = []
let simple = {}
for (let i = 0; i < 3; i++) {

    simple.mark = prompt("введи марку ноута")
    simple.price = +prompt("введи цену ноута")

    laptopsThird_2.push(simple)

}

console.log(laptopsThird_2);


//вариант 3 - не мой вариант. отрабатывает отлично, но есть вопрос: каким образом в объект записываются правильные наименования ключей
let laptopsThird_3 = []
for (let i = 0; i < 3; i++) {
    let mark = prompt("Введите Марку");
    let price = +prompt("Введите цену");
    laptopsThird_3.push({ mark, price })
}

console.log(laptopsThird_3)

// Teacher's comment: Отвечаю по Задаче 3: Третий вариант работает, потому что у объектов есть правило: если свойство и значение объекта называются одинаково, то можем оставить только одно. 
// Н-р:
// let name = "Arsen"
// let user = {
//    name : name
// } 
// можно записать так :
// let name = "Arsen"
// let user = {
//    name
// }







// Задача 4. 
// У пользователя с prompta запрашивать марку/цену. // По его ответу в консоли ввыводить ноутбуки с разметкой.
// Какую марку вы бы хотели? -Acer. Выводим хар-ки ACer
// На какую цену вы рассчитываете? -50000. Выводить все ноутбуки, которые удовл-т(меньше) этой цене


let laptopsFourth = [
    {
        mark: "acer",
        category: ["laptop", "tech"],
        price: 25000
    },
    {
        mark: "acer",
        category: ["laptop", "tech"],
        price: 38000
    },
    {
        mark: "apple",
        category: ["notebook", "tech"],
        price: 37000
    },
    {
        mark: "asus",
        category: ["computer", "premium"],
        price: 125500,
    },
    {
        mark: "asus",
        category: ["computer", "tech"],
        price: 42000
    },
    {
        mark: "acer",
        category: ["notebook", "premium"],
        price: 49000
    }
]



// не понял суть задания, поэтому 2 варианта

let mark_hw4 = prompt("Какую марку вы бы хотели? (acer, apple, asus, hp, samsung)")
let price_hw4 = +prompt("На какую цену вы рассчитываете?")

//вариант который выведет все по наименованию и отдельно все до определенной цены
for (let i = 0; i < laptopsFourth.length; i++) {
    if (laptopsFourth[i].mark == mark_hw4) {
        console.log(laptopsFourth[i]);
    };

    if (laptopsFourth[i].price <= price_hw4) {
        console.log(laptopsFourth[i]);
    }
};

//вариант который выведет все по наименованию и до определенной цены именно данного наименования
for (let i = 0; i < laptopsFourth.length; i++) {
    if (laptopsFourth[i].mark == mark_hw4 && laptopsFourth[i].price <= price_hw4) {
        console.log(laptopsFourth[i]);
    };
};






/* 

    hw5 - найти самую маленькую и потом самую большую зарплату  (задание от Владимира)

*/

let arr = [

    { 'salary': 49, 'name': 'alex' },
    { 'salary': 1200, 'name': 'alex' },
    { 'salary': 100, 'name': 'alex' },
    { 'salary': 60, 'name': 'alex' },
    { 'salary': 48, 'name': 'ivan' },
    { 'salary': 200, 'name': 'petr' },
    { 'salary': 1800, 'name': 'petr' },
    { 'salary': 95, 'name': 'petr' },
    { 'salary': 50, 'name': 'petr' },

]

let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i].salary)
}
console.log(sum)


let max = 0
for (let j = 0; j < arr.length; j++) {
    if (arr[j].salary > max) {
        max = Number(arr[j].salary)
    }
}
console.log(max);



let min = max
for (let x = 0; x < arr.length; x++) {
    if (min > arr[x].salary) {
        min = arr[x].salary
    }
}
console.log(min);