// 1. Написать функцию, которая получает на вход любой объект и возвращает его полную копию

const { isArray } = require("lodash");

// 2. Написать функцию, которая получает на вход объект и путь и возвращает значение, которое лежит по этому пути

// 3. Написать функцию, которая получает на вход два массива и возвращает массив с их пересечением.

// 3*. Сложность алгоритма должна быть линейная

// #1

//////////////////////////////////////////////////////  Клонирование через structuredClone

// const deepOrig = {
//   level1: {
//     name: "Level 1",
//     level2: {
//       name: "Level 2",
//       level3: {
//         name: "Level 3 not obj",
//         level4: {
//           name: "Level 4",
//           level5: {
//             name: "Level 5",
//           },
//         },
//       },
//     },
//   },
// };

// const fuctionClone = (obj) => {
//   return structuredClone(obj);
// };

// const orig = {
//   name: "Anton",
//   socials: [
//     {
//       teg: "vk",
//       url: "https://vk.com/28782",
//     },
//     {
//       teg: "tg",
//       url: "https://tg.com/28782",
//     },
//   ],
// };
// const deepClone = {
//   level1: {
//     name: "Level 1",
//     level2: {
//       name: "Level 2",
//       level3: {
//         name: "Level 3",
//         level4: {
//           name: "Level 4",
//           level5: {
//             name: "Level 5",
//           },
//         },
//       },
//     },
//   },
// };
// const clone = fuctionClone(orig);
// const dClone = fuctionClone(deepClone);

// console.log(clone);
// console.log(dClone);

////////////////////////////////////////////////////////////

// Клонирование через lodash

// const cloneDeep = require("lodash.clonedeep");

// const deepOrig = {
//   level1: {
//     name: "Level 1",
//     level2: {
//       name: "Level 2",
//       level3: {
//         name: "Level 3 not obj",
//         level4: {
//           name: "Level 4",
//           level5: {
//             name: "Level 5",
//           },
//         },
//       },
//     },
//   },
// };

// const deepClone = (obj) => {
//   return cloneDeep(obj);
// };

// const dClone = deepClone(deepOrig);
// console.log(dClone);
// console.log(JSON.stringify(dClone, null, 2));

/////////////////////////////////////////////////////////////

// #2 for of

// const valuePath = (obj, path) => {
//   const keys = path.split("/");
//   let value = obj;
//   for (const key of keys) {
//     value = value[key];
//   }
//   if (value) {
//     delete value.name;
//   }
//   return value;
// };

// const objPath = valuePath(deepOrig, "level1/level2/level3");

// console.log(objPath);

// путь через lodash

// const deepOrig = {
//   level1: {
//     name: "Level 1",
//     level2: {
//       name: "Level 2",
//       level3: {
//         name: "Level 3 not obj",
//         level4: {
//           name: "Level 4",
//           level5: {
//             name: "Level 5",
//           },
//         },
//       },
//     },
//   },
// };

// const get = require("lodash.get");

// const valuePath = (obj, path) => {
//   const value = get(obj, path);

//   if (value) {
//     const { name, ...rest } = value;
//     return rest;
//   }
//   return value;
// };
// const objPath = valuePath(deepOrig, "level1.level2.level3.level4");

// console.log(objPath);

/////////////////////////////////////////////////////////

// #3

// const mergeObjArr = (arr, obj) => {
//   const objAsArr = Object.entries(obj).map(([key, value]) => ({
//     [key]: value,
//   }));
//   return [...arr, ...objAsArr];
// };

// const obj1 = { id: 3, name: "John" };

// const arr1 = [1, 2];

// const data = {
//   test: [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie" },
//   ],
// };

// const result = mergeObjArr(arr1, obj1);
// console.log(result);

// через объединение массиов через Set

// const arr1 = [1, 2];
// const arr2 = [3, 4,];
// const data = {
//   test: [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' },
//   ],
// };
// const mergeArr = (arr1, arr2) => {
//   return [...new Set([...arr1, ...arr2])];
// };
// const result = mergeArr(arr1, arr2);
// console.log(result);

///самый гибкий варик через Array.isArray и Object.entries

// const mergeArray = (obj1, obj2) => {
//   const isObj1 = Array.isArray(obj1);
//   const isObj2 = Array.isArray(obj2);

//   if (isObj1 && isObj2) {
//     return [...obj1, ...obj2];
//   }

//   const obj1AsArr = isObj1 ? obj1 : [{ ...obj1 }];
//   const obj2AsArr = isObj2 ? obj2 : [{ ...obj2 }];

//   return [...obj1AsArr, ...obj2AsArr];
// };

// const obj1 = { id: 1, name: "alex" };
// const obj2 = { age: 30 };

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// console.log(mergeArray(obj1, obj2));
// console.log(mergeArray(arr1, arr2));
// console.log(mergeArray(obj1, arr1));
// console.log(mergeArray(obj2, arr2));
