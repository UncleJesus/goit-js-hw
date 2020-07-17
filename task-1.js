// Task #1
// let name = "Генератор защитного поля";
// let price = 1000;
// let message = `Выбран ${name}, цена за штуку ${price} кредитов`;
// console.log(message);
// price = 2000;
// message = `Выбран ${name}, цена за штуку ${price} кредитов`;
// console.log(message);

// Task #2
// const total = 100;
// const ordered = 50;

// if (total < ordered) {
//   alert("На складе недостаточно твоаров!");
// } else {
//   alert("Заказ оформлен, с вами свяжется менеджер");
// }

// Task #3
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message = prompt("Enter the password");
// if (message === null) {
//   alert("Отменено пользователем!");
// } else if (message === ADMIN_PASSWORD) {
//   alert("Добро пожаловать!");
// } else {
//   alert("Доступ запрещен, неверный пароль!");
// }
// alert(`${message}`);

// Task #4
// let credits = 23580;
// let pricePerDroid = 3000;
// let totalPrice;
// let numberOfDroids = prompt("Сколько дроидов желаете купить?");
// console.log(`${numberOfDroids}`);
// if (numberOfDroids === null) {
//   alert("Отменено пользователем!");
// } else {
//   totalPrice = pricePerDroid * numberOfDroids;
//   console.log(totalPrice);
// }
// if (totalPrice > credits) {
//   alert("Недостаточно средств на счету!");
// } else {
//   credits = credits - totalPrice;
//   alert(
//     `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits} кредитов.'`
//   );
// }

// // Task #5
// let inputCountry = prompt("Введите свою страну !");
// inputCountry = inputCountry.toLowerCase();
// let cost;
// let result;
// let country;
// switch (inputCountry) {
//   case "китай":
//     cost = 100;
//     country = "Китай";
//     result = `Доставка в ${country} будет стоить ${cost} кредитов`;
//     alert(result);
//     break;

//   case "чили":
//     cost = 250;
//     country = "Чили";
//     result = `Доставка в ${country} будет стоить ${cost} кредитов`;
//     alert(result);
//     break;

//   case "австралия":
//     cost = 170;
//     country = "Австралию";
//     result = `Доставка в ${country} будет стоить ${cost} кредитов`;
//     alert(result);
//     break;
//   case "индия":
//     cost = 80;
//     country = "Индию";
//     result = `Доставка в ${country} будет стоить ${cost} кредитов`;
//     alert(result);
//     break;

//   case "ямайка":
//     cost = 120;
//     country = "Ямайку";
//     result = `Доставка в ${country} будет стоить ${cost} кредитов`;
//     alert(result);
//     break;

//   default:
//     alert("В вашей стране доставка не доступна");
// }

// Task #6

// let total = 0;
// while (true) {
//   let input = prompt("Введите число");
//   if (input === null) {
//     break;
//   }
//   input = Number(input);
//   total += input;
// }
// console.log(Общая сумма чисел = ${ total });
