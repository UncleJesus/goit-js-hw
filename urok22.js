// Напишите функцию isEmpty(obj), которая возвращает true,
// если у объекта нет свойств, иначе false.

let schedule = { time: 5 };

const isEmpty = function (obj) {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
