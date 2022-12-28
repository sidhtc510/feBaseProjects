let today = new Date();
let currentYear = today.getFullYear();

function randInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log(randInt(0, 255));

document.querySelector('body').style.background = `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;

let btn = document.querySelector(".b-3");
let inpt = document.querySelector(".i-3");
let out = document.querySelector(".out-3");
let btn4 = document.querySelector(".b-4");
let inpt4 = document.querySelector(".i-4");
let out4 = document.querySelector(".out-4");


inpt.addEventListener("input", function () {
    out.textContent = clearText(inpt.value);
});

btn.addEventListener("click", function () {
    out.textContent = "";
});

function clearText(data) {
    return data.trim().toLowerCase();
}

function indexOfEmul(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) { return i };
    }
    return -1;
}

let result = indexOfEmul([22, 33, 44, 55, 66], 55);
console.log(result);




btn4.addEventListener("click", function () {
    let age = +inpt4.value;

    if (isNaN(age)) return; // if enter not a number
    if (age < 0) return; // if enter negative number
    if (age > 120) return; // if enter more than human can live
    out4.textContent = currentYear - age;
});

console.group('newTask');
const arr5 = [[3, 5, 4], [8, 6, 7]];

function t5() {
    let s = 0;
    for (let i = 0; i < arr5.length; i++) {
        s += sum(arr5[i]);
    }
    return s
}

function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
}
console.log(t5());

console.groupEnd();



console.group('newTask1');
const arr7 = [[8, 5, 2], [3, 5, 4], [8, 6, 7], [3, 5, 1], [9, 6, 7]];
const evenArr7 = arr7.filter(function (item) {
    return (sum(item) % 2 === 0);
});

console.log(evenArr7);

console.groupEnd();



console.group('newTask2');



console.groupEnd();