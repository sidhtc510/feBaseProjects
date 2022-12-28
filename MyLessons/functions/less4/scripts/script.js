// стрелочная функция, это сокращенная запись АНОНИМНОЙ функции.

function sum(x, y) {
    return x + y;
}
function mul(x, y) {
    return x * y;
}

document.querySelector(".b1").addEventListener("click", function () {
    console.log(sum(20, 30));
});

document.querySelector(".b2").addEventListener("click", () => {
    console.log(sum(20, 40));
});
document.querySelector(".b3").addEventListener("click", () => {
    console.log(sum(20, 40));
    console.log(mul(20, 40));
});


//callback

//map - прербирает элементы массива и передает их в указанную функцию
let arr2 = ["   Hello ", "WoRLd", " NICE     "];
let arr3 = [2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10];

function clear(string) {
    return string.trim().toLowerCase();
}
console.log(arr2.map(clear).join(" | "));



const res3 = arr2.map((a) => {
    return a.trim().toLowerCase();
});

console.log(res3);


//можно сократить стрелочную в том случае если  в функции одна строка. в этом случае можно убрать { } и return
// так же, если у функции один аргумент, можно убрать  ()

const res4 = arr2.map(a => a.trim().toLowerCase());

console.log(res4);


//filter

const res6 = arr3.filter(function (item, index) {
    if (item % 2 === 0) {
        return true;
    }
});
console.log(res6);

//аналог записи выше
const res7 = arr3.filter((item, index) => item % 2 === 0);


console.log(res7);



//button4

document.querySelector(".b4").addEventListener("click", function () {
    console.log("--------------- \n standart function (printed this)");
    console.log(this);
    console.log("------------------------------------------------");
});

document.querySelector(".b4").addEventListener("click", () => {
    console.log("--------------- \n arrow function (printed this)");
    console.log(this);
    console.log("------------------------------------------------");
});


// arrow arguments
// присваеваем константе анонимную функцию и далее ею манипулируем
// вызов ф-ии так же как и стандартной

const f1 = (...args) => {
    console.log(args);
    console.log("work");
}
f1(23, 4, 16);

console.log("***************************************************");

const array = ["te", "tet2", "xt3", "text4", "stext5"];


const f2 = arr => arr.filter(i => i.length > 3 ? console.log(i) : false);

f2(array);


const numarray = [1, 2, 3, 4, 54, 65, 6, 7, 6];

const f3 = arr => arr.reduce((s, i) => s + i, 0);

console.log(f3(numarray));