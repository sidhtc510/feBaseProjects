// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[1]);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector("button"));
// console.log(document.querySelector(".item"));
// console.log(document.querySelector("#orange"));
// console.log(document.querySelector("#red"));

// console.log(document.querySelectorAll("button"));
// console.log(document.querySelectorAll(".item"));

// let buttonRed = document.querySelector("#red")
// buttonRed.style.backgroundColor = "green"


// let body = document.body
// body.style.backgroundColor = "black"

// let buttonRed = document.querySelector("#red")
// buttonRed.addEventListener("click", function () {
//     document.body.style.background = "red"
//     // console.log(buttonRed.innerText);
// })

// let buttonOrange = document.querySelector("#orange")
// buttonOrange.addEventListener("click", function () {
//     document.body.style.background = "orange"
// })


// let buttonImg = document.querySelector("#img")
// buttonImg.addEventListener("click", function () {
//     document.body.style.background = "url(./images/imgSmall.jpeg) no-repeat center center fixed"
// })



// Задача1. При нажатии на картинку, цвета фона не отрабатывают. Починить!

// Задача2. Создать кнопку <button class="item" id="random">Random</button> и
// при нажатии на кнопку Random нужно менять цвет фона body на какой-то из цветов массива
// let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"]


// let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"]

// let buttonRandom = document.querySelector("#random")
// buttonRandom.addEventListener("click", function () {
//     let randNum = Math.floor(Math.random() * colors.length);
//     document.body.style.background = colors[randNum]
// })


// ------------------------------------
// let title = document.querySelector(".title").innerText
// let text = document.querySelector(".text").innerText
// let a = document.querySelector("a").innerText

// let arr = [title, text, a]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// ---------------------------------------


// ------------------------------------------
// let title = document.querySelector(".item-1 p")
// let text = document.querySelector(".item-1 .text")
// let a = document.querySelector(".item-1 a")

// console.log(title.innerText);
// ----------------------------------------------


/******************************************************         HW 17.11.22     ********************************************************************************* */


// 1. Project10. Buttons. При нажатии на кнопку менять цвет body.
//     У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
//     Добавить кнопку blue и orange.
//     По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
//     Менять фон body на считанный атрибут id.
let buttonItem = document.querySelectorAll(".item") // наполняем "массив" все что отловили в index.html с классом .item

for (let i = 0; i < buttonItem.length; i++) { // цикл с условием колличества элементов в buttonItem
    buttonItem[i].addEventListener("click", function () { // вешаем слушателя по клику на отловленные .item
        console.log(buttonItem[i].innerText + " на меня кликнули"); // выводим в консоль клик по каждой отдельной кнопке. +выведет innertext который на кнопке + на меня кликнули
        let bodyColor = buttonItem[i].getAttribute("id") // ложим в переменную значение атрибута id
        if (bodyColor == "random") { // если (при клике) атрибут random
            let randCol = (Math.random().toString(16)).substring(2, 8).toUpperCase() // то в переменную положи рандомный цвет (который формируется функцией MATH)
            document.body.style.background = "#" + randCol // присваиваем полученный цвет бекграунду
        } else if (bodyColor == "img") { // иначе если (при клике) атрибут img
            document.body.style.background = "url(./images/imgSmall.jpeg) no-repeat center center fixed"  // на бекграунд ставим картинку
        } else { // иначе
            document.body.style.background = bodyColor //назначь бекграунду цвет указанный в атрибуте id
        }
    })
}



// 2. Создать 5 тегов <p> в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
//     для каждого тега p добавить соотв-ю текст. innerText


let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
let five_p = document.querySelectorAll(".five_p_wrapper p")
// решение через for
// for (let i = 0; i < five_p.length; i++) {
//     five_p[i].innerText = texts[i]
// }
// решение через forEach
texts.forEach((iterText, index )=> {
    let iterP = five_p[index]
    iterP.innerText = iterText
});



// 3. Есть массив arr = [
//     {
//         link : "https://google.com",
//         title : "Ссылка на гугл"
//     },
//     {
//         link : "https://instagram.com",
//         title : "Ссылка на инстаграм"
//     },
//     {
//         link : "https://facebook.com",
//         title : "Ссылка на фейсбук"
//     }
// ]
//     В html создаем 3 тега a - <a href=""></a> x3. Для каждого из трех, 
//         добавить link в href и title внутрь тега из массива arr

let arr = [
    {
        link: "https://google.com",
        title: "Ссылка на гугл"
    },
    {
        link: "https://instagram.com",
        title: "Ссылка на инстаграм"
    },
    {
        link: "https://facebook.com",
        title: "Ссылка на фейсбук"
    }
]


let a_href = document.querySelectorAll(".a_href_wrapper a")


for (let i = 0; i < a_href.length; i++) {
    a_href[i].setAttribute("href", arr[i].link)
    a_href[i].innerText = arr[i].title
}






// 4. Создать две кнопки - <button>PLUS</button>, <button>MINUS</button>
//     Создать тег p с начальным значением - 0. 
//     При клике на buttonPlus увеличивать значение в теге p на 1
//     При клике на buttonMinus уменьшать значение в теге p на 1
//     addEventListener. innerText.

let b_minus = document.querySelector("#minus")
let b_plus = document.querySelector("#plus")
let current_p = document.querySelector(".plusMinus p")



b_minus.addEventListener("click", function () {
    current_p.innerText = Number(current_p.innerText) - 1
})

b_plus.addEventListener("click", function () {
    current_p.innerText = Number(current_p.innerText) + 1
})





// самоЗадача
// создать 4 дива 200Х200
// при клике на один из дивов менять рандомно его цвет
// дополнительно выводить hex 

let itemDivs = document.querySelectorAll(".itemDiv")
let itemDivs_p = document.querySelectorAll(".itemDiv p")


for (let i = 0; i < itemDivs.length; i++) {
    itemDivs[i].addEventListener("click", function () {
        let randomColor = (Math.random().toString(16)).substring(2, 8).toUpperCase()
        itemDivs[i].style.background = "#" + randomColor
        itemDivs_p[i].innerText = "#" + randomColor

    })
}


// let idd = document.querySelector("#idd")
// idd.addEventListener("click", function(){
//     idd.style.border = "15px solid red"
// })



//mousemove
let move = 0
function name1() {
    move++
    console.log(move);
}

document.querySelector(".mousemove").addEventListener("click", name1)
// document.querySelector(".mousemove").onmousemove = name1 //same functional


let w = 200;
function name2() {
    w = w + 1;
    document.querySelector(".mousemove").style.width = w + "px";
}
document.querySelector(".mousemove").addEventListener("mousemove", name2);



//dayNight

let dn = document.querySelectorAll('input[name="dayNightInput"]'); // or className

let dayNightBody = document.querySelector(".dayNight")
let dnh3 = document.querySelector(".dayNight h2 span")

for (let i = 0; i < dn.length; i++) {
    dn[i].addEventListener("change", function() {
        let idAttr = dn[i].getAttribute("id")

        if (idAttr == "night") {
            dayNightBody.classList.add("dayNight-night")
            dnh3.textContent = "night"
        } else {
            dayNightBody.classList.remove("dayNight-night")
            dnh3.textContent = "day"
        }
    });
}