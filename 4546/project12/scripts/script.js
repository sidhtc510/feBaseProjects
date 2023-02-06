const act = document.querySelector(".modalWrapper");
const showModalButton = document.querySelector(".showModal");
const closeModalButton = document.querySelector(".closeModal");
const body = document.querySelector("body");

showModalButton.addEventListener("click", () => {
    act.classList.add("active");
    body.style.overflow = "hidden";
});

act.addEventListener("click", (e) => {
    if (e.target.classList.contains("modalWrapper")) {
        act.classList.remove("active");
        body.style.overflow = "visible";
    }
    console.log("click modal Wrapper");
});

closeModalButton.addEventListener("click", () => {
    act.classList.remove("active");
    body.style.overflow = "visible";
});xx