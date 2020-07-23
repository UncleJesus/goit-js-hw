// // Задание 1
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// user.mood = "Happy";
// user.hobby = "skydiving";
// user.premium = false;

// // Задание 2
// const countProps = function (obj) {
//   return Object.entries(obj).length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// Задание 3

const findBestEmployee = function (employees) {
  const employeesValue = Object.values(employees);
  let maxEmployeesValue = employeesValue[0];
  for (let i = 1; i < maxEmployeesValue; i++) {
    if (employeesValue[i] > maxEmployeesValue) {
      maxEmployeesValue = employeesValue[i];
    }
  }
  const bestEmployee = employeesValue.indexOf(maxEmployeesValue);
  const employeeKeys = Object.keys(employees);
  return employeeKeys[bestEmployee];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
// Задание 4
// Задание 5
// Задание 6
