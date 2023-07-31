// 2. Написать функцию, которая получает на вход объект и путь и возвращает значение, которое лежит по этому пути

// const deepOrig = {
//   level1: {
//     name: "Level 1",
//     level2: {
//       name: "Level 2",
//       level3: {
//         value: "Level 3",
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

// const ObjPath = (obj, path) => {
//   const keys = path.split(".");
//   let value = obj;

//   for (const key of keys) {
//     if (
//       Array.isArray(value) ||
//       (typeof value === "object" && value.hasOwnProperty(key))
//     ) {
//       value = value[key];
//     } else {
//       return undefined;
//     }
//   }

//   return value;
// };
// console.log(ObjPath(deepArr, "[0].level2[0].level3[0].value"));
// console.log(ObjPath(deepOrig, "level1.level2.level3.value"));

// (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj;

// const getPath = (obj, path) => {
//   const keys = path.split(/\[|\]|\.|'|"/g).filter((key) => key !== "");

//   let value = obj;

//   value = keys.reduce((value, key) => {
//     if (value !== undefined && value !== null) {
//       value = value[key];
//     } else {
//       return undefined;
//     }
//     return value;
//   }, obj);

//   return value;
// };
// const deepArr = [
//   {
//     name: "Level 1",
//     level2: [
//       {
//         name: "Level 2",
//         level3: [
//           {
//             value: "Level 3",
//             level4: [
//               {
//                 name: "Level 4",
//                 level5: [
//                   {
//                     name: "Level 5",
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];
// const path = "[0].level2[0].level3[0].value";
// const result = getPath(deepArr, path);

// console.log(result);

const getPath = (obj, path) => {
  return path.split(/\[|\]|\.|'|"/).reduce((value, key) => {
    if (key !== "") {
      if (value !== undefined && value !== null) {
        value = value[key];
      } else {
        return undefined;
      }
    }
    return value;
  }, obj);
};

const deepArr = [
  {
    name: "Level 1",
    level2: [
      {
        name: "Level 2",
        level3: [
          {
            value: "Level 3",
            level4: [
              {
                name: "Level 4",
                level5: [
                  {
                    name: "Level 5",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
const deepObj = {
  level1: {
    name: "Level 1",
    level2: {
      name: "Level 2",
      level3: {
        value: "Level 3",
        level4: {
          name: "Level 4",
          level5: {
            name: "Level 5",
          },
        },
      },
    },
  },
};

const pathArr = "[0].level2[0].level3[0].level4[0].level5[0]";

const pathObj = "level1.level2.level3.level4.level5";

const resultArr = getPath(deepArr, pathArr);

const resultObj = getPath(deepObj, pathObj);

console.log(resultArr);

console.log(resultObj);
