const arr1 = [7, 4, 5, 6, 8];
const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');
const out3 = document.querySelector('.out-3');

function f1(arr, myFunc, block, separator) {
    arr[3] = arr[3] * 2;
    // out1.innerHTML = arr1;
    // showArr(arr1, out1);
    myFunc(arr, block, separator);
}

function showArr(arr, block, separator = ' ') {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + separator;
    }
    block.innerHTML = out;
}

f1(arr1, showArr, out1);


// пример коллбек
function squad(item) {
    return item ** 2;
}

// const arr2 = arr1.map(squad);
const arr2 = arr1.map(item => item ** 2);
// console.log(arr2);
showArr(arr2, out3);


document.querySelector('.b-4').addEventListener('click', () => {
    getUserName(fixUserName);
});
function getUserName(fixFunc) {


    const userName = document.querySelector('.i-4').value;
    console.log(fixFunc(userName));
}

function fixUserName(str) {
    return str.trim().toLowerCase();
}


// асинхронные колбек ф-ии

// async function pageLoader(callBack){
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     callBack(data);
// }

// function pageLoader(callBack) {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => callBack(json));
// }


// function getAjax(data) {
//     console.log('send request');
//     console.log('server response');
//     console.log(data);
// }

// pageLoader(getAjax);

// ад колбеков

// function pageLoader() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(json => {
//             console.log('send request');
//             console.log('server response');
//             console.log(json);
//             fetch('https://jsonplaceholder.typicode.com/users/' + json.userId)
//             .then(response => response.json())
//             .then(json => {
//                 console.log('send request');
//                 console.log('server response');
//                 console.log(json);
//             });
//         });
// }

// pageLoader();

function pageLoader(url, callback) {
    fetch(url)
        .then(response => response.json())
        .then(json => callback(json));
}


function getAjax(data) {
    console.log('send request');
    console.log('server response');
    console.log(data);
    pageLoader("https://jsonplaceholder.typicode.com/users/" + data.userId, showUser);
}

function showUser(user){
    console.log(user);
}

pageLoader("https://jsonplaceholder.typicode.com/todos/1", getAjax);