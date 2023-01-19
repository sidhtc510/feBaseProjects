function sep(str = "*") {
    str = str.toUpperCase();
    console.log(`***************************** ${str} *****************************`);
}

// pure function - функция исполнение которой зависит только от входящих параметров  
function squad(n) {
    return n ** 2;
}

// console.log(squad(4));


// impure function
function squad2(n) {
    document.querySelector(".out-1").textContent = squad(n);
}

// squad2(8);


//___
let count = 0;

function myCount() { // зависимость от внешних функций позволяет сказать что функция не является чистой
    return count++;
}
// console.log(myCount());
// console.log(myCount());

//.---

function showAlert() {
    alert('hello');
}

// showAlert();

//-------
sep();sep("loops - forin - forof - map ");sep();


sep("new array");
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let arr = [];
for (let i = 0; i < 20; i++) {
    arr.push(random(2000, 10));
}
console.log(arr);



sep("for in");
for (const key in arr) {
    console.log(key);
    console.log(arr[key]);
}


sep("for of");
for (const value of arr) {
    console.log(value);
}


sep("map");
let view = arr.map(i => console.log(i));


sep();
sep("paragraph - getElementsByTagName(");
let p = document.getElementsByTagName("p");
console.log(p);


sep("paragraph - for in");
for (const key in p) {
    console.log(key);
    console.log(p[key]);
}


sep("paragraph - for of");
for (const value of p) {
    console.log(value);
}


sep("paragraph - map");
// let viewP = p.map(i => console.log(i));


sep();
sep("paragraph - querySelectorAll");
let qp = document.querySelectorAll("p");
console.log(qp);


sep("paragraph - for in");
for (const key in qp) {
    console.log(key);
    console.log(qp[key]);
}


sep("paragraph - for of");
for (const value of qp) {
    console.log(value);
}


sep("paragraph - map");
// let viewP = qp.map(i => console.log(i));