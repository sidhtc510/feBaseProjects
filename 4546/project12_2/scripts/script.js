// получить текст вывести в консоль
// получить нащваник класса вывести в консоль

// const text = document.querySelector(".green-btn");
// text.addEventListener("click", (event) => {

//   console.log(text.innerText);
//   console.log(event.target.className);
//   console.log(text.className);
// });

// const redbtn = document.querySelector("#red-btn");
// redbtn.addEventListener("click", (event) => {
//   console.log(redbtn.innerText);
//   console.log(event.target.id);
//   console.log(redbtn.id);
// });

// ДЗ. 1. При нажатии на кнопку img, менять фон body на картинку, которую нужно заранее подготовить
//          На этапе получения текста, проверить, если в тексте есть img, то делаем одно
//          иначе делаем document.body.style.backgroundColor = event.target.innerText

// 2. На этапе получения текста, проверить, если(есть класс random-btn) в тексте(классе) есть random,
// то менять цвет body на случайный.  Math.random() - случайное число. rgba(Math.random())

const buttons = document.querySelectorAll(".btn");

// buttons.forEach("click", function (btn) {
// if (btn.classList.value.includes("btn-img")) {
//   document.body.style.background = 'url("bg.jpg")';
// } else {
//   document.body.style.background = btn.innerText;
// }
// });

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.value.includes("btn-img")) {
      document.body.style.background = 'url("bg.jpg")';
    } else if (btn.classList.value.includes("btn-random")) {
      document.body.style.background = `rgb(${RGB(0,256)}, ${RGB(0, 256)}, ${RGB(0, 256)})`;
    } else {
      document.body.style.background = btn.innerText;
    }
  });
});

function RGB(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
