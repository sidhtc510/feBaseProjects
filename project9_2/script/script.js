// ********************************************* 14.11 *********************************************************
 
// Задача1. Написать функцию, которая аргументами получается два числа и возвращает большее из них.
// Задача2. Написать функцию, которая принимает аргументом число(больше 0)
// и возвращает массив чисел от 0 до этого числа

// hw1

function biggest(a, b) {
    if (a > b) {
        return console.log(`a - ${a}`);
    }
    console.log(`b - ${b}`)
}
biggest(88, 89)



// hw2
let prompted = +prompt("enter num")
function myArray(x) {
    if (x <= 0) { return "введи число больше чем 0" }

    let arr = [];

    for (let i = 0; i <= x; i++) {
        arr.push(i);
    }
    return arr
}

console.log(myArray(prompted));


// ****************************************************************************************************************


// && - AND
// || - OR


/*
    функция
*/

/*
1. function declaration
2. function expression
3. arrow function

*/


// function sum(a, b) {
//     return a + b
// }
// function mult(a, b) {
//     return a * b
// }


// console.log(sum(20,25));
// console.log(sum(25,25));

// function calc(){
//     let num = +prompt("введи число")
//     return mult(num, num)
// }
// console.log(calc());

// function pow(a, b) {
//     return Math.pow(a, b) + a
// }
// console.log(pow(5,3));

// let myName = prompt("name")
// function greating(name) {
//     return `hello ${name}`
// }

// console.log(greating(myName));


// месяц квартал
// let promtedMonth = +prompt("enter month")
// const qtr = (month) => {
//     if (month <= 3) {
//         return 1
//     }
//     if (month <= 6) {
//         return 2
//     }
//     if (month <= 9) {
//         return 3
//     }
//     if (month <= 12) {
//         return 4
//     }
// }

// console.log(qtr(promtedMonth))




// function num(number) {
//     if (number >= 50) {
//         console.log("more than 50");
//     } else {
//         console.log(number)
//     }
// }
// num(51)

// function num(number) {
//     if (number >= 50) {
//         return console.log("больше ", number)
//     }
//     console.log(number);
// }
// num(51)




