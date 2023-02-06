const goodsWrapper = document.querySelector(".goods-wrapper");

const goods = [
  {
    id: 1,
    title: "velosiped",
    price: 40000,
  },
  {
    id: 2,
    title: "lizhi",
    price: 18000,
  },
  {
    id: 3,
    title: "samokat",
    price: 25000,
  },
];

goods.forEach((item) => {
  goodsWrapper.innerHTML += `
    <article class="item">
        <p class="item__title">${item.title}</p>
        <p class="item__price">${item.price}</p>
        <span class="item__delete">X</span>
    </article>
    `;
});
