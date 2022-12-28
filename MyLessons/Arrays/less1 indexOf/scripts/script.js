// indexof находит первое совпавшее значение в массиве, если false вернет -1, если true вернет номер элемента в массиве

const a = [9, 8, 7, 5, 4, 7, 5, 2];
const b = ["hi", "hello"];

console.table(a);
console.log(a.indexOf(5));

if (a.indexOf(7) != -1) { // сравнивать с -1 (просто оставить a.indexOf(7) без сравнения с -1, расчитывая получить true или false, нельзя)
    console.log(true);
} else {
    console.log(false);
}

console.log(b.indexOf("hello")); // вернет 1

function indexOfEmul(array, item, from = 0) {
    let result = -1;
    for (let i = from; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }

    }
    return result;
}

console.log(indexOfEmul(a,-5));