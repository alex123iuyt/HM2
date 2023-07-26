// 1. Написать функцию, которая получает на вход любой объект и возвращает его полную копию

const deepOrig = {
  level1: {
    name: "Level 1",
    level2: {
      name: "Level 2",
      level3: {
        name: "Level 3 not obj",
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

const originalObj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "cooking"],
};

const deepCopy = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const copyObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copyObj[key] = deepCopy(obj[key]);
    }
  }

  return copyObj;
};

const copiedObj = deepCopy(originalObj);

console.log(copiedObj);
