// function f1(a,b,c){
//     return a+b+c;
// }

// console.log(f1(2,3,4));

// function showSum(elem, x, y) {
//     document.querySelector(elem).textContent = x + y;
// }

// showSum(".out-1", 3, 4);

let out2 = document.querySelector(".out-2");


function showSum2(x, y, elem) {
    console.log(arguments);
    elem.innerHTML = x + y;
    console.log(elem);
}


showSum2(24, 34, out2);


function sumAllArguments() {
    let sum = 0;
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}
sumAllArguments(21, 32, 5, 665, 4, 22);

function sumAllRestParameters(...args) {
    let sum = 0;
    console.log(args);
    // for (let i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }

    sum = args.reduce((accum, item) => accum += item);
    console.log(sum);
    return sum;
}
sumAllRestParameters(21, 32, 6, 665, 3, 23);

function showAll(res, ...args) {
    let sum = 0;
    console.log(args);
    sum = args.reduce((accum, item) => accum += item) + res;
    document.querySelector(".out-1").innerHTML = `<b>${sum}</b>`;
}
showAll(sumAllRestParameters(21, 32), 2, 43);




console.log("-----------------------------------------------------------------");

function fname(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

fname("text", 24, 'a', 25.2,1);