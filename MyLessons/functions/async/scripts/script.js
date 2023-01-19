// https://youtu.be/lgmgY6hx12g

// общая тема:  АСИНХРОННОСТЬ event loop цикл событий

// сначала обрабатываются функции которые попадают в callStack
// если есть settimeout то они обрабатываются webapis и попадают в callback queue (в очередь)
// далее будут вызваны из очереди после очистки callstack, то есть после выполнения основного кода

//такая же ситуация с addEventListener
// при запуске программы, обрабатываются все функции которые находятся в callStack, 
// а функции с  addEventListener, после обработки webapis,
// попадают в  callback queue (в очередь)


// console.log('start');
// setTimeout(() => {
//     console.log('timer');
// }, 1000);
// console.log('end');


// console.log('start');
// setTimeout(() => {
//     console.log('timer2');
// }, 1000);
// console.log('end');





console.log('start');
setTimeout(() => {
    console.log('timer1');
    setTimeout(() => {
        console.log('timer2');
    }, 0);
}, 0);
console.log('end');

console.log('start');
setTimeout(() => {
    console.log('timer3');
}, 0);
console.log('end');
