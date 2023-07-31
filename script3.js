// 3. Написать функцию, которая получает на вход два массива и возвращает массив с их пересечением.
// get(obj, 'test[1].name')
// 3*. Сложность алгоритма должна быть линейная

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

// const peresechenie = (...args) => {
//   const result = [];
//   let map = args[0].reduce((acc, i) => {
//     acc[i] = acc[i] ? acc[i] + 1 : 1;
//     return acc;
//   }, {});

//   for (let i; i < args[1].lenght; i++) {
//     const current = args[i];
//     let count = map[current];
//     if (count && count > 0) {
//       result.push(current);
//       map[current] -= 1;
//     }
//   }
//   return result;
// };

// const arr1 = [1, 2, 3, 4, 5];

// const arr2 = [3, 4, 5];

// const obj1 = { a: 1, b: 2, c: 3, name: "Alice" };

// const obj2 = { c: 3, d: 4, name: 5 };

// const test = {
//   arr: [{ name: "John" }, { name: "Alice" }, { name: "Bob" }],
// };

// const peresechenie = (a, b) => {
//   if (Array.isArray(a) && Array.isArray(b)) {
//     return a.filter((item) => b.includes(item));
//   } else if (typeof a === "object" && typeof b === "object") {
//     return Object.keys(a).filter((key) => b.hasOwnProperty(key));
//   } else {
//     return [];
//   }
// };

// console.log(peresechenie(arr1, arr2));

// console.log(peresechenie(obj1, obj2));

// console.log(peresechenie(arr1, obj1));

// console.log(peresechenie(obj1, [test.arr[1].name]));



// const peresechenie = (...args) => {
//   const result = [];

//   for (const arg of args) {
//     if (Array.isArray(arg)) {
//       result.push(...arg);
//     } else if (typeof arg === "object" && arg !== null) {
//       for (const key in arg) {
//         result.push(arg[key]);
//       }
//     }
//   }

//   return result;

// };

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];
// const obj1 = { a: 6, b: 7 };
// const obj2 = { c: 8 };

// console.log(peresechenie(arr1, arr2)); 
// console.log(peresechenie(obj1, obj2)); 
// console.log(peresechenie(arr1, obj1, arr2, obj2))



// peresechenie =(arr1, arr2) =>{
//   const result = [];
//   for (const item of arr1) {
//     if (arr2.includes(item)) {
//       result.push(item);
//       arr2.splice(arr2.indexOf(item), 1);
//     }
//   }
//   return result;
// }

// const arr1 = [1, 2, 2, 3, 4, 5, 5];
// const arr2 = [2, 2, 3, 3, 5, 6];

// const obj = {
//   arr:[
//     {
//       name:'test'
//     }
//   ]
// }
// console.log(peresechenie(arr1, arr2)); 


// const peresechenie = (arr1, arr2) => {
//   const result = [];
//   const arr2Copy = arr2.slice();

//   for (const item of arr1) {
//     const index = arr2Copy.indexOf(item);
//     if (index !== -1) {
//       result.push(item);
//     }
//   }

//   return result;
// }

const peresechenieObj = (arr1, arr2, property) => {
  const result = [];
  const arr2Values = arr2.arr.map(obj => obj[property]);

  for (const item of arr1) {
    const index = arr2Values.indexOf(item);
    if (index !== -1) {
      result.push(arr2.arr[index]);
    }
  }

  return result;
}

const arr1 = [1, 2, 2, 3, 4, 5, 5];
const arr2 = [2, 2, 3, 3, 5, 6];

const obj = {
  arr: [
    { name: 'test', age: 30 },
    { name: 'hello', age: 25 },
    { name: 'world', age: 40 }
  ]
};
console.log(peresechenieObj(arr1,arr2));