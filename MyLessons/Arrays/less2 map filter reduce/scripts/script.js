console.log("********************************map*****************************************");
// map  -  создаёт новый массив. модифицирует значения внутри коллбэк функции (модифицирует то что в {})
const a = [3, 4, 5];

let b = a.map(item => {
    return item * 3;
});

console.log(a);
console.log(b);

const c = [];
c[0] = 5;
c[3] = 25;
c[7] = 15;
console.log(c);

let d = c.map(item => {
    return item * 3;
});

console.log(d);


let e = a.map((item, index) => {
    console.log(index);
    return item * 4;   // всё что return, будет присвоено элементу массива
});

console.log(e);




console.log("******************************filter*****************************************");
// filter не модифицирует значения внутри коллбэк функции (не модифицирует то что в {})
// filter использовать для фильтрации массива согласно заданным условиям

const f = [0, 3, 4, 5, 6, 7, 7, 8, 0, 9, 10, 20];

let g = f.filter((item, index) => {
    if (item > 6) {
        return item * 2; // Не возвращает item, а возвращает true либо false  https://youtu.be/Y5YlT0Q1v28?t=320
        // то есть умножение на 2 не произойдет, поскольку он вернет только true 
        // достаточно писать return true; для фильтрации массива по заданному условию
    }
});

console.log(g);

let h = f.filter(item => {
    if (item % 2 === 0) {
        return true; // при true отобразит элемент массива 0
        // return item; // при item не отобразит элемент массива 0
    }
});

console.log(h);


console.log("******************************reduce*****************************************");

let r = [3, 1, 2, 3, -1, 4, -8, 5]; // 3  ..  15

// let s = r.reduce((accum, item,index,array)=>{ // sintax

// });

let s = r.reduce((accum, item) => { // сумма всех чисел с учетом отрицательных
    accum = accum + item;
    return accum;
});
console.log(s);

let t = r.reduce((accum, item) => { // сумма положительных
    if (item > 0) {
        accum += item;
    }
    return accum;
}, 0);
console.log(t);


let u = r.reduce((accum, item) => { // максимальное. смени > на < и найдёт минимальное
    if (item > accum) {
        accum = item;
    }
    return accum;
});
console.log(u);

console.log("------------------------------");
let w = r.reduce((accum, item, index, array) => {
    console.log("------------------------------");
    console.log(accum);
    console.log(item);
    console.log(index);
    console.log(array);
});
console.log("======================");


let v = [
    {"id":55, "city":"kyiv"},
    {"id":65, "city":"dnepr"},
    {"id":85, "city":"donetsk"},
];

let x = v.reduce((accum,item) =>{
    accum.push(item.city);
    return accum;
}, []);
console.log(x);

console.log(Array.isArray(x));


