// 3. Написать функцию, которая получает на вход два массива и возвращает массив с их пересечением.
// get(obj, 'test[1].name')
// 3*. Сложность алгоритма должна быть линейная

const { values } = require("lodash");

// const getMinimum = (items) => {
//   let minimum = items[0];

//   for (let i = 1; i < items.length; i++) {
//     if (minimum > items[i]) {
//       minimum = items[i];
//     }
//   }

//   return minimum;
// };

//   1 - инициализация  let minimum = items[0];
//   2 - цикл for (let i = 1; i < items.length; i++) {
//   if (minimum > items[i]) {
//     minimum = items[i];
//   }
// }
//   function countProperties(obj) {
//   let count = 0;
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       count++;
//     }
//   }
//   return count;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];

// const peresechenie = (arr1, arr2) => {
//   const result = [];
//   const check = new Set(arr1)
//   for (const item of arr1) {
//     if (arr2.includes(item)) {
//       result.has(item);
//     }
//   }
//   return result;
// };

// console.log(peresechenie(arr1, arr2));

const peresechenie = (...args) => {
  const result = [];
  const set = new Set();

  for (const arg of args) {
    let values;

    if (Array.isArray(arg)) {
      values = arg;
    } else if (typeof arg === "object") {
      values = Object.values(arg);
    }

    for (const value of values) {
      if (set.has(value)) {
        result.push(value);
      } else {
        set.add(value);
      }
    }
  }

  return result;
};

const arr1 = [1, 2, 3];

const arr2 = [3, 4, 5];

const obj1 = { a: 1, b: 2, c: 3, name: "Alice" };

const obj2 = { c: 3, d: 4, name: 5 };

const test = {
  arr: [{ name: "John" }, { name: "Alice" }, { name: "Bob" }],
};

console.log(peresechenie(arr1, arr2));

console.log(peresechenie(obj1, obj2));

console.log(peresechenie(arr1, obj1));

console.log(peresechenie(obj1, [test.arr[1].name]));
