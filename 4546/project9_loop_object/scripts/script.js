// однострочный комментарий
/*
    многострочный
    комментарий
*/
/*
    JS - не типизированный язык программирования
    TS - типизированный JS
    JSX - объединение JS и HTML. JS - только то, что относится к выводу данных
*/
// Методы взаимодействия с браузером
// console.log("Hello World") // отобразить переданную строку в консоли
// alert("Hello Arsen") // отображает сообщение для пользователя и ждет нажатия на "ОК" // для вывода данных
// console.log("Hello Vasya") // отобразить переданную строку в консоли // для вывода данных

// prompt("Как вас зовут") // отображает вспывающее окно с переданной строкой и полем ввода. prompt для ввода данных

/*
    переменная - способ хранения данных, хранилище данных. 
    в переменной можно хранить все что угодно, например имя пользователя, продукты и т.д. 
    Есть несколько способов создать переменную в JS
    1. var - устаревшее. Область видимости - глобальная(функциональная). ЗАБЫТЬ!!!
    2. let - обычная переменная. Блочная область видимости
    3. const - константная переменная. Переменную созданную с помощью const нельзя переопределить


    const не может быть переопределена. если положили какое-то значение, то другое уже положить не можем

    Правила именования переменных:
    а) использование латиницы и транслитерацию (familiya, cena - не валидные)
    б) не может начинаться с цифры (но в любом другом месте использоват цифру можно) 
        name, name1 - валидные(правильный) и разные переменные
    в) лучше использовать осмысленное название
        Если переменная хранить имя, то это name, userName, myName
        Если стоимость товара, то price, productPrice.
    г) чувствительность к регистру; userName и UserName - две разные переменные
    д) не можем использовать тире(-)

    С заглавной буквы переменные не начинаются. 
        Есть константные переменные, которые известны до начала выполнения кода,
        н-р число ПИ - const PI - 3.14; ссылка на API - const URL  

    Есть несколько способов наименования переменных, которые состоят из словосочетания
    1. userNameSurname - camelCase. первая буква первого слова маленькая, остальные первые буквы слов Заглавные
    2. user_name - snake_case - все маленькие, но между словами есть нижний слэш(_)

    3. kebab-case - product-name
*/

/* 
    let name = prompt("Как вас зовут") // prompt всегда возвращает строку. 10 -> "10"
    console.log(name)
    name = 10
    console.log(name)
*/

/* Assignment to constant variable.
    const myName = prompt("Как вас зовут")
    console.log(myName)
    myName = 10
    console.log(myName)
*/


/*  
    Типы данных JS
    1. string - строка - "Hello World", "256"
    2. number - число - 256, 10, 10.5, 10.35263  [-2^64;2^64]  
*/

/*
    Математические операторы
    1. + 
    2. - 
    3. *
    4. /
    5. % - остаток от деления
*/

/*
    // Входные данные
    const a = 10
    const b = 20
    // Мат. операции 
    const sum = a + b
    const minus = a - b
    const mult = a * b
    const divide = a / b
    // Вывод данных
    console.log(sum, minus, mult, divide)
    console.log(minus)
    console.log(mult)
    console.log(divide)
*/

/* % - остаток от деления 
    const k = 40
    const l = 6

    const rest = k % l // 40/5 = 8 - остаток 0  // 40 / 6 = 6 4/6
    console.log("Остаток: ", rest)
*/

/* + как оператор конкатенации
    конкатенация - склеивание строк

const name = "Arsen"
const surname = "Iusupov"

const fullName = name + surname
console.log(fullName)
*/
// console.log(name + surname)
/* 
    prompt("Ввести число") - всегда возвращает тип данных string(строка)
    +prompt("Введите число") - в этом случае вернется тип данных number 
    ДЗ. 
    1. Добавить пробел между строками name и surname
    2. Есть переменные r = 12, g = 13, b = 14. Используя конкатенацию вывести строку "rgb({12}, {13}, {14})"
    3. Попросить у пользователя ввести его возраст(годы) и в консоли вывести год его рождения(валидный для 2023)
    4. Попросить ввести число и в консоли вывести квадрат этого числа
    5. Попросить пользователя ввести два числа (поочередно - 2x prompt), а в консоли вывести их произведение(*)
*/

/*
    ` ` -  шаблонная строка(шаблонный литерал)
*/
// const r = 12
// const g = 13
// const b = 14

// const result = `rgb(${r}, ${g}, ${b})`

/*
    условный оператор (условное ветвление)

    if(условие) {
        делаем что-то
    }

    if(условие) {
        делаем что-то
    } else {
        делаем что-то
    }

    if(условие) {
        делаем что-то
    } else if(условие) {

    }
    else {
        делаем что-то
    }
*/



// Если градусов больше чем 15, то в консоли вывести "Наденьте футболку, на улице жарко"
// иначе, вывести в консоли "наденьте кофту, на улице прохладно"
// если градусов == 15, то "выбирайте сами"
// = - оператор присваивания
// "15" == 15 - true
// "15" === 15 - false

// "15" != 15 - false
// "15" !== 15 - true
// "12" != 15 - true
// console.log("15" !== 15) // отрицание равенству. два разных типа данных не равны - true
// console.log("15" != 15) // false
/* 
    const degree = "15"
    if(degree > 15) {
        console.log("наденьте футболку, на улице жарко")
    } else if(degree == 15) {
        console.log("выбирайте сами")
    } else {
        console.log("наденьте кофту, на улице прохладно")
    }
*/
/* 
    15 > 15 - неверное 
    > - больше
    < -  меньше
    >= - больше или равно
    <= - меньше или равно
    == - сравнение
    === - строгое сравнение(с учетом типа данных) // использовать по умолчанию
    != - отрицание без учета типа данных (не равно?)
    !== - отрицание с учетом типа данных (не равно с учетом типа данных?)

    && - И - булевое И (верно, когда обе части до && и после && true)
    || - ИЛИ - булевое ИЛИ (верно, когда хотя бы одна из частей между || true)

*/

// Задача. Попросить пользователя ввести число и вывести его в консоль, если оно больше 100
// иначе, в консоли вывести "Ваше число меньше"
/*
const num = +prompt("Введите число") // prompt возвращает строку, а +prompt число

if(num > 100) {
    console.log(num)
} else {
    console.log("Ваше число меньше")
}
 */

// const greeting = "hello"  
/* 
    ctrl + / - закомментировать строку или выделенную область 
*/
/* 
    const num1 = "7"
    const num2 = "10"
    const num3 = 9
    // Number()
    const concat = num1 + num2 // "710"
    const mult = num1 * num2 // 70
    const divide = num1 / num2 // 0.7
    console.log(mult)
    console.log(divide)

    const concat1 =  num3 + num1 // "79" -> "97"
    console.log(concat1)

    const min = num1 - num2 // -3
    console.log(min) 
*/

/* 
    Сравнение строк
    string.length - свойство длина строки - количество симоволв в строке  
    string.includes() - метод, проверяющий существует ли подстрока в строке. (содержит ли подстрока строку) 

    1. Сравниваем первые символы строк
    2. Если первый символ первой строки больше/меньше, чем первый символ второй, то это
        значит, что первая строка больше/меньше второй. На этом сравнение окончено
    3. Если первые символы равны, то идем дальше и сравниваем подобным образом уже следующие символы строк
    4. Если символы в строках закончились одновременно, то значит, что строки равны
*/
/* 
const str1 = "Hello"
const str2 = "Arsen"
const str3 = "hello"
const str4 = "Hellp"

console.log("Armen" > "Arsen") // false s > m

console.log(str3 > "h") // true
console.log(str1 > str4) // false. H = H, e = e, ll = ll, o < p
console.log(str1 < str2) // false

console.log(str1 === str2) // false
console.log(str1 === str3) // false

console.log(str1.length === str3.length) // true
console.log(str1.includes('ll')) // true
console.log(str1.includes('a')) // false

console.log(str1 > str2) // Посимвольное сравнение 
console.log("Н" > "А") // true Н дальше по алфавиту
*/

// Есть переменная price. Если price > 1000, то в консоли выводим "скидка 10%"
// если price > 1500, то в консоли выводим "скидка 15%"
// иначе выводим "Скидки нет"

/* 
const price = 1700
if(price > 1500) {
    console.log("скидка 10%")
} else if(price > 1000) {
    console.log("скидка 15%")
} else {
    console.log("скидок нет")
}
 */
/* 
const price = 1700
    if(price > 1000 && price < 1500) {
        console.log("скидка 10%")
    } else if(price > 1500) {
        console.log("скидка 15%")
    } else {
        console.log("скидок нет")
    }
*/

/* Массивы и циклы 
    массив - это структура данных или коллекция элементов, которая упорядочена 
        и элементы имеют индексы от 0 до N
    .length - свойство длины массива - это количество элементов в нем
    .push() - метод, который позволяет добавить значение в конец массив 
    .pop() - метод, который позволяет удалить значение с конца массив
    .unshift() - метод, который добавляет в начало массив
    .shift() - метод, который удаляет значение с начала массива
*/
/*
const arr = [] // пустой массив. длина пустого массива - 0, потому что в нем нет элементов
const numbers = [1, 2, 3, 4, 5] // длина 5. индексы [0, 1, 2, 3, 4]
const names = ["Arsen", "Ivan", "Maria"] // длина 3. индексы [0, 1, 2]

// В консоли отобразить число 3 из массива numbers
console.log(numbers[2]) // 3
console.log(names[0]) // "Arsen"

const smth = ["Arsen", 1, ["Maria", 10]] // многомерный массив
console.log(smth[2][1]) // ["Maria", 10]

console.log(numbers.length)
*/
/* 
    const movies = ["Аватар", "Звездные войны"]
    // movies = [] // нельзя
    // movies[0] = "Аватар 2", movies[1] = {name: "Hello"} // можно
    console.log(movies)
    // добавить элемент "Гарри Поттер" в конец массива, используя метод push()
    movies.push("Гарри Поттер")
    console.log(movies) //  ['Аватар', 'Звездные войны', 'Гарри Поттер']
    // добавить в начало массива "Властелин колец"
    movies.unshift("Властелин колец")
    console.log(movies) // ['Властелин колец', 'Аватар', 'Звездные войны', 'Гарри Поттер']
*/
/*
    num** - квадрат
    Math.pow(num, index)
    ДЗ. 
    1. Написать программу, которая запрашивает у пользователя два числа поочередно и выводит бОльшее из них.
    2. Написать программу, которая запрашивает у пользователя число и выводит "положительное" "отрицательно" "равно 0"
    3. Есть массив arr = [1, 4, 2, 6, 9]. Есть пустой массив squares = []. Нужно заполнить массив
        squares квардатами чисел из первого массива, используя методы push, unshift,shift, pop
        в итоге  squares = [1, 16, 4, 36, 81]
        ['Властелин колец', 'Аватар', 'Звездные войны', 'Гарри Поттер']
        1. shift()
        2. pop(), pop()
        3. push()
    4. Используя методы push, unshift, shift, pop удалить из массива movies "Властелин колец" и "Звездные войны"
        В итоге в массиве должно остаться ["Аватар", "Гарри Поттер"]
*/
/*
    Типы данных:
    1. string - строка
    2. number - число
    3. object - объект. массив является частным случаем объекта

    Данные с сервера. JSON --> [{}, {}]
    200 фильмов [{name : "Аватар",duration : "1h 23min", preview : "https://.img"}, {}]
 */

// Math.pow(10, 2) // 10^2 = 100
/* 
    const arr = [1, 4, 2, 6, 9]
    const squares = []
    const square1 = Math.pow(arr[0], 2)
    squares.push(square1, Math.pow(arr[1], 2))
*/

/* 
    Цикл - повторяющиая последовательность действий
    for(условие) {
        тело цикла
    } 
    Пока условие верно, то выполяется код в теле цикла
    - выполнить операцию несколько раз автоматически, вместо того, чтобы делать ее вручную
    - заполнить массив квадратами чисел из другого массива
    - рендерим(отображаем) несколько html карточек (div)

    for(инициализация; условие; завершающая цикл операция) {
        тело цикла
    }
    for(let i = 0; i < N; i++) {
        тело 
    }
    1. Инициализация - начальное значение счетчика
    2. Условие - условие по которому будут выполняться действия. Пока верно действия выполняются,
        как только оно становится ложным, тело не выполняется
    3. Завершающая операция - действие, которое выполняется после выполнения тела цикла
    4. Тело - алгоритм действий
*/

// Отобразить в консоли "Hello" 5 раз
/* 
    for (let i = 0; i < 5; i++) {
        console.log(i) // 0, 1, 2, 3, 4
        console.log("Hello")
    }
*/
/*
    1. i = 0, i < 5(0 < 5) - true, console.log("hello"); i++, i = 1
    2. i = 1, i < 5(1 < 5) - true, console.log("hello"); i++, i = 2
    3. i = 2, i < 5(2 < 5) - true, console.log("hello"); i++, i = 3
    4. i = 3, i < 5(3 < 5) - true, console.log("hello"); i++, i = 4
    5. i = 4, i < 5(4 < 5) - true, console.log("hello"); i++, i = 5
    6. i = 5, i < 5(5 < 5) - false,(выйти из цикла) действие console.log("hello") не делаем, потому что условие false 
*/

// Задача. Вывести числа от 0 до 10 в консоли с помощью цикла for
/* 
    for(let i = 0; i <= 10; i++) {
        console.log(i)
    }
*/
// Задача. Попросить пользователя ввести число 3 раза
/*
    for(let i = 0; i < 3; i++) {
        prompt("введите число")
    }
*/

/*  // Вывести каждый элемент массива в консоли
    const numbers = [2, 4, 6, 8, 10, 12]

    console.log(numbers[0]) // 2
    console.log(numbers[1]) // 4
    console.log(numbers[2]) // 6
    console.log(numbers[3]) // 8
    console.log(numbers[4]) // 10
    console.log(numbers[5]) // 12


for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

    numbers.length = 6
    1. i = 0, i < numbers.length (0 < 6) - true, console.log(numbers[0]); i++, i = 1,
    2. i = 1, i < numbers.length (1 < 6) - true, console.log(numbers[1]); i++, i = 2,
    3. i = 2, i < numbers.length (2 < 6) - true, console.log(numbers[2]); i++, i = 3,
    4. i = 3, i < numbers.length (3 < 6) - true, console.log(numbers[3]); i++, i = 4,
    5. i = 4, i < numbers.length (4 < 6) - true, console.log(numbers[4]); i++, i = 5,
    6. i = 5, i < numbers.length (5 < 6) - true, console.log(numbers[5]); i++, i = 6,
    7. i = 6, i < numbers.length (6 < 6) - false, выходим из цикла
*/

/*
// Задача. Есть массив numbers. Вывести в консоль только положительные числа из этого массива
    const numbers = [0, -100, 632, 0.5, -0.7, -100, 500] // 632, 0.5, 500

    for(let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i])
        if(numbers[i] > 0) {
            console.log(numbers[i])
        }
    }

    numbers.length = 7
    1. i = 0, 0 < 7 - true, numbers[0] > 0, 0 > 0 -false, не выполняю console.log(), i++
    2. i = 1, 1 < 7 - true, numbers[1] > 0, -100 > 0 - false, не выполняю console.log(), i++
    3. i = 2, 2 < 7 - true, numbers[2] > 0, 632 > 0 -true, console.log(632), i++
    ...
    7. i = 6, 6 < 7 -true, numbers[6] > 0, 500 > 0 - true, console.log(500), i++
    8. i = 7, 7 < 7 - false, выход из цикла
*/

// Есть массив numbers. Вывести только четные числа из этого массива

/*
const numbers = [7, 16, 32, 51, 100, 121, 40] // 16, 32, 100, 40

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}


    num % 2 === 0 - четное
    num % 2 === 1 - нечетное

    14 % 2 === 0 - true? - четное
    15 % 2 === 1 - true? - нечетное


    14 % 2 = 0
    if(0) {
        /// 
    }
    if(1) - true
    if(2) - true
    if(0) - false
*/

// Есть массив numbers. Нужно найти сумму его элементов.  
/* 
const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]

let sum = 0
for(let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}
console.log(sum)

/*
    numbers.length = 8
    sum = 0
    1. i = 0, 0 < 8 - true, sum = sum + numbers[0], sum = 0 + (-100), sum = -100, i++
    2. i = 1, 1 < 8 - true, sum = sum + numbers[1], sum = -100 + 0, sum = -100, i++
    3. i = 2, 2 < 8 - true, sum = sum + numbers[2], sum = -100 + 43, sum = -57, i++
    4. i = 3, 3 < 8 - true, sum = sum + numbers[3], sum = -57 + (-20), sum = -77, i++
    5. i = 4, 4 < 8 - true, sum = sum + numbers[4], sum = -77 + 150, sum = 73, i++
    6. i = 5, 5 < 8 - true, sum = sum + numbers[5], sum = 73 + 70, sum = 143, i++
    7. i = 6, 6 < 8 - true, sum = sum + numbers[6], sum = 143 + 15, sum = 158, i++
    8. i = 7, 7 < 8 - true, sum = sum + numbers[7], sum = 158 + 1.5, sum = 159.5, i++
    9. i = 8, 8 < 8 - false, выходим из цикла
*/

/*
// Есть массив numbers. Нужно найти сумму положительных элементов.  
    const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]

    let sum = 0
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            sum = sum + numbers[i]
        }
    }
    console.log(sum)
*/
/* 
    ДЗ. 
    1. // Есть массив numbers. Нужно найти сумму нечетных элементов.
        const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
    2. Есть массив numbers. Нужно найти сумму четных и сумму нечетных элементов.
        В консоли вывести разницу между ними (вычесть меньшее из большего)
        const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
*/

/* 
    Объект - тип данных, который позволяет хранить свойства какого-либо предмета или всего, что вас окружает.
        Объект - совокупонсть свойств. 
    Каждое свойство имеет название(ключ) и значение

    Массив - это частный случай объекта, ключами которого являются индексы, т.е числа от 0 до N
    const arr1 = [
        // key : value
        // 0 : "Сандалии"
        "Сандалли"
    ]
    Массив объектов:
    const shoes = [
        {name: "Сандалии", price: 1504}, 
        {name: "Ботинки", price: 3900}, 
    ]
    shoes[0].price // 1504 
    shoes[1].price // 3900
*/
const arr = [] // пустой массив
const obj = {} // пустой объект

const shoe = {
    // key : value
    // ключ : значение
    name: "Сандалии",
    price: 1504,
    sostav: "Термопласт",
    id: 58404409,
    color: "Темно-синий",
    category: "Обувь",
    additional: {
        country: "Китай",
        sex: "Мужской"
    },
    sizes: ["21", "22", "23", "24"]
};
// console.log(shoe.price) // 1504
// console.log(shoe["name"]) // "Сандалии"
// console.log(shoe)

console.log(Object.keys(shoe));
console.log(Object.keys(shoe).length);

/*
  ДЗ. 
    1. // Есть массив numbers. Нужно найти сумму нечетных элементов.
        const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
    2. Есть массив numbers. Нужно найти сумму четных и сумму нечетных элементов.
        В консоли вывести разницу между ними (вычесть меньшее из большего)
        const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]


    ДЗ. 
    1. Создать объект, у которого будет название, цена и цвет. Вывести его в консоль
    2. Создать объект user, у которого будет email, password, login, age.
        Вывести в консоль год рождения пользователя, используя свойтсво age из объекта user
    3. Есть массив prices. Нужно найти общую цену всех товаров внутри массива объектов prices
        и вывести в консоли
        const prices = [
            {
                name: "Iphone 14",
                price : 100000
            },
            {
                name: "Iphone 13",
                price : 80000
            },
            {
                name : "Iphone 12",
                price: 70000
            }
        ]
*/
/* 
Типы данных. 
Примитивами 
1. string - строка 
2. number - число 
...
Сложные 
3. object - объект, частным случаем которого является массив. 
*/

// const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5];
// let sumNegative = 0;
// let sumPositive = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2) {
//         sumNegative += numbers[i];
//     }else if(numbers[i]%2 === 0){
//         sumPositive += numbers[i];
//     }
// }
// if(sumPositive > sumNegative){
//     console.log(sumPositive - sumNegative);
// }else if(sumPositive < sumNegative){
//     console.log(sumNegative - sumPositive);
// }


const good = {
    name: "product",
    price: 123,
    color: "red"
};
// console.log(good);

const currentYear = 2023;
const user = {
    email: "sidhtc510@gmail.com",
    password: "pass",
    login: "sidhtc510",
    age: "38"
};
// console.log(currentYear - user.age);

const prices = [
    {
        name: "Iphone 14",
        price: 100000
    },
    {
        name: "Iphone 13",
        price: 80000
    },
    {
        name: "Iphone 12",
        price: 70000
    }
];
let sum = 0;

for (let i = 0; i < prices.length; i++) {
    sum += prices[i].price;
};
// console.log(sum);

function getTimesFromMinutes(minutes) {
    if (typeof (minutes) !== 'number' || minutes > 600 || minutes < 0 || !Number.isInteger(minutes)) {
        return "Ошибка, проверьте данные";
    }
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;

    let hoursStr = '';

    switch (h) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    const str = `${h} ${hoursStr} ${m} минут`;
    return str;
}

console.log(getTimesFromMinutes(120));