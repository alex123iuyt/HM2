// 2. Написать функцию, которая получает на вход объект и путь и возвращает значение, которое лежит по этому пути

const deepOrig = {
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

const ObjPath = (obj, path) => {
  const keys = path.split(".");

  let value = obj;

  for (const key of keys) {
    if (value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      return undefined;
    }
  }
  return value;
};
console.log(ObjPath(deepOrig, "level1.level2.level3"));
