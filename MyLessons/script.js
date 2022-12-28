// const str = ['test', 'test1', 'test2',];

// for (let i = 0; i < str.length; i++) {
//    console.log(str[i]);
// }

// const str = 'hello world';
// console.log(str.slice(5,10));

// function first(cf) {
//     console.log("hello ");
//     cf(second);
// }
// function second() {
//     console.log("world");
// }


// first(second);


// const object = {
//     name:'Ivan',
//     age:18,
//     height:180,
//     weight:70,
// }

// for(let key in object){
//     console.log(`
//     property ${key} has value ${object[key]}
//     `);
// }
// console.log(Object.keys(object)); // print all keys in Object
// console.log(Object.keys(object).length); // print quantity of keys in Object


// const {name} = object; // assign an object`s value 
// const {age} = object;
// const {name, age} = object; // short  note
// const name = object.name; //same but longer than previous note
// const age = object.age;
// console.log( name, age); // print value

const sedan = {
   color : "grey",
}
let bmw = {
   enginePower : 190,
}
const toyota = {
   enginePower : 120,
}

Object.setPrototypeOf(bmw, sedan); // объекту бмв, устанавливаем прототип седан
console.log(bmw);