// InnerText

// let title = document.querySelector(".title").innerText
// let text = document.querySelector(".text").innerText
// let a = document.querySelector("a").innerText

// let arr = [title, text, a]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// ---------------------------------------



// let title = document.querySelector(".item-1 p")
// let text = document.querySelector(".item-1 .text")
// let a = document.querySelector(".item-1 a")

// console.log(title.innerText);
// console.log(text.innerText);
// console.log(a.innerText);

// let text = document.querySelector(".text")
// text.innerText = "privet 2"

// let h4 = document.querySelector("div h4")
// h4.innerText = "Привет Толян";


let titles = document.querySelectorAll(".item-1 .text")

for (let i = 0; i < titles.length; i++) {
    titles[i].innerText = "hello everyone!!"
}


let newTexts = document.querySelectorAll(".item-2 p")

for (let i = 0; i < newTexts.length; i++) {
    newTexts[i].addEventListener("click", function() {
        newTexts[i].innerText = "hello everyone!!"
    })
}