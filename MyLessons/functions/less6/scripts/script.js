// this - это ссылка на объект, который вызывает код в данный момент

//Стрелочные функции не имеют this

let count = 0;
function f1() {
    console.log(count);
    console.log(this);
    this.textContent = count;
    count++;
}

// document.querySelector('.b-1').addEventListener("click", f1);

// arrow functions не имеют this
// const f2 = () => {
//     console.log(count);
//     console.log(this);
//     this.textContent = count; // что бы работало, нужно явно указывать кнопку
//     count++;
// }

// document.querySelector('.b-2').addEventListener("click", f2);


//call
// f1.call(document.querySelector('.b-1'));


function f3() {
    console.log(count);
    console.log(this);
    this.textContent = count;
}

document.querySelector('.b-3').addEventListener("click", ()=>{
    count++;
    f3.call(document.querySelector('.b-2'), count);
});