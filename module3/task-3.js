// // // Задание 1
// // const user = {
// //   name: "Mango",
// //   age: 20,
// //   hobby: "html",
// //   premium: true,
// // };
// // const keys = Object.keys(user);
// // for (const key of keys) {
// //   console.log(`${key}: ${user[key]}`);
// // }

// // user.mood = "Happy";
// // user.hobby = "skydiving";
// // user.premium = false;

// // // Задание 2
// // const countProps = function (obj) {
// //   return Object.entries(obj).length;
// // };

// // console.log(countProps({})); // 0

// // console.log(countProps({ name: "Mango", age: 2 })); // 2

// // console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// // Задание 3

// const findBestEmployee = function (employees) {
//   const employeesValue = Object.values(employees);
//   let maxEmployeesValue = employeesValue[0];
//   for (let i = 1; i < maxEmployeesValue; i++) {
//     if (employeesValue[i] > maxEmployeesValue) {
//       maxEmployeesValue = employeesValue[i];
//     }
//   }
//   const bestEmployee = employeesValue.indexOf(maxEmployeesValue);
//   const employeeKeys = Object.keys(employees);
//   return employeeKeys[bestEmployee];
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux
// // // Задание 4
// const countTotalSalary = function (employees) {
//   const valuesOfEmployees = Object.values(employees);
//   let totalSalary = 0;
//   for (const valuesOfEmployee of valuesOfEmployees) {
//     totalSalary += valuesOfEmployee;
//   }
//   return totalSalary;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0\

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// // Задание 5
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const allPropArr = [];
//   for (const product of arr) {
//     if (prop in product) {
//       allPropArr.push(product[prop]);
//     }
//   }
//   return allPropArr;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

// // Задание 6
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   total = 0;
//   for (const item of allProdcuts)
//     if (item["name"] === productName) {
//       total += item.price * item.quantity;
//     }
//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800
