/*
   setAttribute('attrName', attrValue)
   getAttribute('attrName')
   removeAttribut('attrName)
   hasAttribute('attrName')

   <img src="" class="" alt=""> src, class, alt - атрибут, то что в "" - значение атрибута
*/


/*  получение атрибута */


// let item = document.querySelector("div")
// let itemClass = item.getAttribute("class")
// //аналог двух записей 
// let itemClass1 = document.querySelector("div").getAttribute("class")

// let a = document.querySelector("a")
// let aHref = a.getAttribute("href")
// console.log(aHref);

// let p = document.querySelector("p")
// let p_id = p.getAttribute("id")
// console.log(p_id);



/*  установка атрибута */
// let itemSet = document.querySelector("div")
// itemSet.setAttribute("id", "idd")

// let imgSrc = document.querySelector("img")
// imgSrc.setAttribute("src", "./images/Rectangle1.png")

// document.querySelector("img").setAttribute("src", "./images/Rectangle1.png")

/*--------------------------------------------------------------------------------------*/
// let button = document.querySelector("button")
// button.addEventListener("click", function(){
//     let imgSrc = document.querySelector("img")
//     if(imgSrc.hasAttribute("src")){
//         imgSrc.removeAttribute("src")
//         button.innerText = "добавить картинку"
//     }else{
//         imgSrc.setAttribute("src", "./images/Rectangle1.png")
//         button.innerText = "Удалить картинку"
//     }
// })
/*--------------------------------------------------------------------------------------*/

/*-----------решение предидущей задачи только через колбек функцию ---------------------*/
// let button = document.querySelector("button")
// function addAttr() {
//     let imgSrc = document.querySelector("img")
//     if(imgSrc.hasAttribute("src")){
//         imgSrc.removeAttribute("src")
//         button.innerText = "добавить картинку"
//     }else{
//         imgSrc.setAttribute("src", "./images/Rectangle1.png")
//         button.innerText = "Удалить картинку"
//     }
// }

// button.addEventListener("click", addAttr) // addAttr - вызов колбек функции. вызывается без круглых скобок ()
/*-------------------------------------------------------------------------------------*/

// let images = document.querySelectorAll("img")

// for (let i = 0; i < images.length; i++) {
//     images[i].setAttribute("src", `./images/Rectangle${i+1}.png`);   
// } 


// home Work

/* 
1. Project10. Buttons. При нажатии на кнопку менять цвет body.
    У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
    Добавить кнопку blue и orange.
    По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
    Менять фон body на считанный атрибут id.
    
2. Создать 5 тегов <p> в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
    для каждого тега p добавить соотв-ю текст. innerText
    
3. Есть массив arr = [
    {
        link : "https://google.com",
        title : "Ссылка на гугл"
    },
    {
        link : "https://instagram.com",
        title : "Ссылка на инстаграм"
    },
    {
        link : "https://facebook.com",
        title : "Ссылка на фейсбук"
    }
]
    В html создаем 3 тега a - <a href=""></a> x3. Для каждого из трех, 
        добавить link в href и title внутрь тега из массива arr
4. Создать две кнопки - <button>PLUS</button>, <button>MINUS</button>
    Создать тег p с начальным значением - 0. 
    При клике на buttonPlus увеличивать значение в теге p на 1
    При клике на buttonMinus уменьшать значение в теге p на 1
    addEventListener. innerText. 
*/