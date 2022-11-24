const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const properties of Object.keys(object1)) {
    if (Array.isArray(object1[properties]) && Array.isArray(object2[properties])) {
      if (eqArrays(object1[properties], object2[properties]) !== true) {
        return false;
      }
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

const assertEqualObjects = function(actual,expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
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
  c: "1"
};
const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
const games = {
  game1: "cssource",
  game2: "csgo"
};
const games1 = {
  game1: "cssource",
  game2: "csgo"
};

assertEqualObjects(ab,ba);
assertEqualObjects(ab,abc);
assertEqualObjects(cd,dc);
assertEqualObjects(cd,cd2);
assertEqualObjects(games,games1);