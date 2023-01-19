const out = document.querySelector(".out");
const f2 = (arg) => {
    out.textContent = "name: " + arg.name + " \n surname: " + arg.surname;
    // console.log("name: " + arg.name);
    // console.log("surname: " + arg.surname);
};

f2(
    {
        name: "tolik",
        surname: "Sydorenko",
    }
);