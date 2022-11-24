const assertEqual = function(actual, expected) {
  let pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  let fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  return (actual === expected ? console.log(pass) : console.log(fail));
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const properties of Object.keys(object1)) {
    if (Array.isArray(object1[properties]) && Array.isArray(object2[properties])) {
      return eqArrays(object1[properties], object2[properties]);
    } else if (object1[properties] !== object2[properties]) {
      return false;
    }
  }
  return true;
};
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  a: "1",
  b: "2"
};
const abc = {
  a: "1",
  b: "2",
  c: "3"
};
const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "2"
};
const cd2 = {
  c: "1",
  d: ["2", 3,4]
};
const games = {
  game1: ["cssource"],
  game2: "csgo"
};
const games1 = {
  game1: ["cssource"],
  game2: "csgo"
};



assertEqual(eqObjects(ab, ba), true);

assertEqual(eqObjects(abc, ba), false);
assertEqual(eqObjects(ab, abc), false);

assertEqual(eqObjects(cd, dc), false);

assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects(games,games1),true);