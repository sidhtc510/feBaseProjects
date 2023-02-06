const images = document.querySelectorAll(".images img");
const placeImg = document.querySelector(".images-container img");

images.forEach(function (el) {
    el.addEventListener("click", function() {
        placeImg.setAttribute("src", el.getAttribute("src")); 
    });
});

// const numbers = [10, 20, 30, 40, 50];

// numbers.forEach(function(params, index) {
//     console.log(params, index+1);
// });

// const names = ["ars", "vasya", "tolik"];

// names.forEach(function (name, i, arr) {
//   console.log(name, i, arr);
// });
