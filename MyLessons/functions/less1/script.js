let newDiv = document.querySelector(".newDiv");

// function testFunction() {
//     const x = 5;
//     const y = 10;
//     console.log(x + y);
//     testFunction2();
// }

// function hello() {
//     testFunction();
//     console.log('Hello');
// }

// function testFunction2(){

//     function t3() {
//         console.log('t 3 function');
//     }
//     t3();
//     console.log('test function 2');
// }

// hello();

function unixTime() {
    const time = Math.floor(new Date().getTime());
    console.log(time);
}

unixTime();

function randomInt() {
    const min = 1;
    const max = 10;

    let rand = Math.floor(min +Math.random() * (max + 1 - min));
    return rand;
}

// randomInt(); 

let c= 0;

function count() {
    c++;
    console.log(c);
}

// newDiv.addEventListener('mousemove', count);
// newDiv.onclick = count;


newDiv.addEventListener('mousemove', blockWidth);

let w = 100;
function blockWidth() {
    w = w + randomInt();
    newDiv.style.width = w + 'px';
    console.log(w);
}