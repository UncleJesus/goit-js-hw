// Задание 1

// const categories = document.querySelectorAll("#categories .item").length;

// console.log(`В списке ${categories} категории.`);

// const listsCategoriesRef = document.querySelectorAll("#categories .item");

// listsCategoriesRef.forEach((item) =>
//   console.log(
//     `Категория: ${item.querySelector("h2").textContent},
//   Количество элементов: ${item.querySelectorAll("li").length}`
//   )
// );

// Задание 2

// const ingredients = [
//   "Картошка",
//   "Грибы",
//   "Чеснок",
//   "Помидоры",
//   "Зелень",
//   "Приправы",
// ];

// const ingredientsList = ingredients.map((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   return li;
// });
// document.querySelector("#ingredients").append(...ingredientsList);

// Задание 3
// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const itemsOfGallery = (image) => {
//   const li = document.createElement("li");
//   li.classList.add("galery-item");

//   const img = document.createElement("img");
//   img.src = image.url;
//   img.alt = image.alt;

//   li.appendChild(img);
//   return li;
// };
// const createdGallery = images.map((image) => itemsOfGallery(image));
// document.querySelector("#gallery").append(...createdGallery);

// // Задание 4

// const Value = document.querySelector("#value");

// const incrementButton = document.querySelector(`[data-action="increment"]`);
// const decrementButton = document.querySelector(`[data-action="decrement"]`);

// incrementButton.addEventListener("click", increment);
// decrementButton.addEventListener("click", decrement);

// function increment() {
//   Value.textContent = Number(Value.textContent) + 1;
// }
// function decrement() {
//   Value.textContent -= 1;
// }

// Задание 5
// const inputIn = document.querySelector("#name-input");
// const inputOut = document.querySelector("#name-output");

// inputIn.addEventListener("input", inputChangeOut);

// const inputIn = document.querySelector("#name-input");
// const inputOut = document.querySelector("#name-output");

// inputIn.addEventListener("input", inputChangeOut);

// function inputChangeOut(event) {
//   inputOut.textContent = event.target.value;
//   if (inputOut.textContent === "") {
//     inputOut.textContent = "незнакомец";
//   }
// }
//

//
// Задание 6
//

// const input = document.querySelector("#validation-input");

// input.addEventListener("input", (e) => {
//   if (e.target.value.length < e.target.getAttribute("data-length")) {
//     input.setAttribute("class", "invalid");
//   } else {
//     input.setAttribute("class", "valid");
//   }
// });

//
// Задание 7
//

// const formSize = document.querySelector("#font-size-control");
// const formSpan = document.querySelector("#text");

// formSize.addEventListener("input", changeFont);

// function changeFont() {
//   formSpan.style.fontSize = `${formSize.value}px`;
// }

//
