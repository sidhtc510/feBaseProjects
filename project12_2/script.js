// декларативная функция

// let a = [1, 2, 3, 4, 5]

// function washingMashine(x) {
//     for (let i = 0; i < x.length; i++) {
//         console.log(x[i]);
//     }
// }

// washingMashine(a)

// =>  == return 

// стрелочная функция
// let strelF = (x) => { // let название ф-ии = (аргумент)-если один, можно скобки убрать => - стрелка(означает return) далее фигурные скобки. их можно убрать если условие короткое
//     for (let i = 0; i < x.length; i++) {
//         console.log(x[i]);
//     }
// }
// strelF(a)

// let amoreB = (a,b) => a > b ? a : b;
// console.log(amoreB(100,101));

// task1
let inpt = document.querySelector(".inpt")
let btn = document.querySelector(".btn")

function btnCallBack() {
    inpt.value = "thanks for press button"
    console.log("click");
    btn.removeEventListener("click", btnCallBack)
}


btn.addEventListener("click", btnCallBack)


// task2
let inpt2 = document.querySelector(".inpt2")
let btnTransfer = document.querySelector(".transfer")
let btnIncome = document.querySelector(".income")
// console.log(inpt2, btnTransfer, btnIncome);
let transferCallBack = function () {
    btnIncome.textContent = inpt2.value
}

btnTransfer.addEventListener("click", transferCallBack)

// task3
let inpSquare = document.querySelector(".square")
let btnSquare = document.querySelector(".action")


btnSquare.addEventListener("click", toSquare)
let square = n => n * n

function toSquare(event) {
    let num = Number(inpSquare.value)
    inpSquare.value = square(num)
}


// task4
let inpt3 = document.querySelector(".inpt3")
let btnEnabled = document.querySelector(".enabled")
let btnDisabled = document.querySelector(".disabled")
console.log(inpt3, btnEnabled, btnDisabled);

btnDisabled.addEventListener("click", function(){
    inpt3.setAttribute("disabled", true)
})
btnEnabled.addEventListener("click", function(){
    inpt3.removeAttribute("disabled")
})


// 5) На querySelectorAll
// Задача. Дан HTML код (см. под задачей). Поменяйте содержимое абзацев с классом zzz на их порядковый номер в коде.

// <h2 class="zzz">Заголовок с классом zzz, не поменяется.</h2>
// <p class="zzz">Абзац с классом zzz.</p>
// <p class="zzz">Абзац с классом zzz.</p>
// <p>Просто абзац, не поменяется.</p>

let pz = document.querySelectorAll("p.zzz")
console.log(pz);

for (let i = 0; i < pz.length; i++) {
    pz[i].innerText = i
}