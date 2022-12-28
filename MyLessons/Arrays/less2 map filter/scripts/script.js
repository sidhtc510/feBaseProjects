// map

console.log("********************************map*****************************************");
const a = [3,4,5];

let b = a.map(item =>{
    return item * 3;
});

console.log(a);
console.log(b);

const c =[];
c[0] = 5;
c[3] = 25;
c[7] = 15;
console.log(c);

let d = c.map(item=>{
    return item * 3;
});

console.log(d);


let e = a.map((item, index) =>{
    console.log(index);
    return item * 4;   // всё что return, будет присвоено элементу массива
});

console.log(e);


//filter
console.log("******************************filter*****************************************");
const f = [3,4,5,6,7,7,8,9,10,20];

let g = f.filter((item,index)=>{
    if(item > 6){
        return item*2; // Не возвращает item, а возвращает true либо false  https://youtu.be/Y5YlT0Q1v28?t=320
    }
});

console.log(g);
