// const main = document.querySelector("main");

// const names = ["arsen", "tolik", "vasya", "jopka"];

// for (let i = 0; i < names.length; i++) {
//     main.innerHTML += `<p class="item-${i+1}">${names[i]}</p>`;    
// }


// names.forEach((name,index)=> {
//     main.innerHTML += `<p class="item-${index+1}">${name}</p>`;    
// });




const posts = [
    {
        id:1,
        title: "title first post",
        img: "https://picsum.photos/400/250",
        descr: "lorem ipsum description1"
    },
    {
        id:2,
        title: "title second post",
        img: "https://picsum.photos/400/250",
        descr: "lorem ipsum description2"
    },
    {
        id:4,
        title: "title third post",
        img: "https://picsum.photos/400/250",
        descr: "lorem ipsum description 3"
    }
];


const main = document.querySelector("main");
posts.forEach(post=>{
main.innerHTML += `
<article class="item item-${post.id}">
    <h5 class="title">${post.title}</h5>
    <img src="${post.img}" alt="">
    <p class="description">${post.descr}</p>
</article>
`;
});