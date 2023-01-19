let amount = document.querySelector(".amount");
let converted = document.querySelector(".converted");
let course = 38.3;

amount.addEventListener("input", function () {
    converted.textContent = exchange(amount.value, course);
});


function exchange(amount, course){
    return amount*course;
}