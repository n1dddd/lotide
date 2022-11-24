const assertEqual = function(actual, expected) {
  let pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  let fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  return (actual === expected ? console.log(pass) : console.log(fail));
};

const eqObjects = function(object1,object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const properties of Object.keys(object1)) {
    if (object1[properties] !== object2[properties]) {
      return false;
    }
  }
  return true;
};

const ab = {a:"1",b:"2"};
const ba = {a:"1",b:"2"};
const abc = {a:"1",b:"2",c:"3"};

console.log(eqObjects(ab,ba));


// eqObjects(ab,abc);
//assertEqual(eqObjects(abc,ba),false);
// assertEqual(eqObjects(ab,abc),false);
