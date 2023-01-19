// this - это ссылка на объект, метод которого мы вызываем

// вывод коректный
const user = {
    myname : "Anatolii",
    sayHello(middleName) {
        console.log(`Hello i\`m ${this.myname} ${middleName}, i\`m ${this.age} years old`, this);
    },
    age: 38
};

user.sayHello('Vladimirovich');


// выведет объект window
const f = user.sayHello;
f();
 

// как не терять контекст
// используем метод call

const f2 = user.sayHello;
f2.call(user, 'Vladimirovich');

// apply - почти аналог call
// аргументы можно передавать в качестве массива

const f3 = user.sayHello;
f3.call(user, ['Vladimirovich']);

console.log("---------------------------------bind---------------------------------");
const f4 = user.sayHello.bind(user);
f4("Vladimirovich");