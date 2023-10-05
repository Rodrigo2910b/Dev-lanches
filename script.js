const list = document.querySelector("ul");
const accessMenu = document.querySelector(".accessMenu");
const discount = document.querySelector(".discount");
const amount = document.querySelector(".amount");
const vegan = document.querySelector(".vegan");

function showAll(productsArray) {
  let myli = "";

  productsArray.forEach((product) => {
    myli += `
    <il>
      <img src=${product.src}>
      <p>${product.name}</p>
      <p class="p"> R$: ${product.price.toFixed(2)}</p>
    </il>
    `;
    list.innerHTML = myli;
  });
}
accessMenu.addEventListener("click", () => showAll(menuOptions));

discount.addEventListener("click", (discount10) => {
  const newPrices = menuOptions.map((product) => ({
    ...product, // esparamar o array aqui spread operator
    price: product.price * 0.9, // dar 10% de disconto
  }));
  showAll(newPrices);
});

amount.addEventListener("click", (amount) => {
  const result = menuOptions.reduce((acc, product) => acc + product.price, 0);
  list.innerHTML = `A soma de todos os itens do menu é R$: ${result.toFixed(
    2
  )}`;
});

vegan.addEventListener("click", (veganFillter) => {
  const fiterJustVegan = menuOptions.filter((product) => product.vegan);

  showAll(fiterJustVegan);
});
