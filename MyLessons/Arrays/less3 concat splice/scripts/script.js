console.log("**********************concat***************************");
//concat - create new array
const a1 = [1,2,3,4];
const a2 = [5,6,];
const a3 = [7,8,9,];

const b =a1.concat(a2,a3);
console.log(b);



console.log("**********************splice***************************");
//splice - change current array
let k = [33,44,55,66,77,88,99,100];
// k.splice(2); // удалить с позиции 2 до конца
// k.splice(2,3); // удалить с позиции 2, 3 элемента
// k.splice(2,3,"hi"); // с позиции 2 заменить следующие 3 элемента на hi
k.splice(2,1,"hi","hello","text","hi everyony"); // с позиции 2 заменить 1 элемент на "hi","hello","text","hi everyony",

console.table(k);