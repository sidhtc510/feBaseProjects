const numberOfFilms = +prompt('how many fillms did you saw?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};


for (let i = 0; i < 2; i++) {
    const a = prompt('last film which you saw?', ''), b = prompt('rate it', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        personalMovieDB.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB < 10) {
    console.log('views less than 10');
} else if (personalMovieDB >= 10 && personalMovieDB < 30) {
    console.log('normal from 10 to 30');
}else if(personalMovieDB >= 30){
    console.log('you watched more than 30 films');
}else{
    console.log('error ');
}

console.log(personalMovieDB);



// не имеет отношения к проекту

// let num = 1;
// (num>1) ? console.log("ok"): console.log("neOk");


// let zvezda = "";
// for (let i = 0; i < 10; i++) {
//     zvezda += "*";
//     console.log(zvezda);
// }

// let zvezda1 = "";
// for (let i = 1; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         zvezda1 += "*";
//     }
//     zvezda1 += "\n";
// }
// console.log(zvezda1);

// first: for (let i = 0; i < 2; i++) {
//     console.log(`-First level ${i}`);
//     for (let j = 0; j < 2; j++) {
//         console.log(`---Second level ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 3) continue first;
//             console.log(`-----Third level ${k}`);
//         }
//     }
// }console.log('');


