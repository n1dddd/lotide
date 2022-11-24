const assertEqual = function(actual, expected) {
  let pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  let fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  return (actual === expected ? console.log(pass) : console.log(fail));
};

const eqObjects = function(object1,object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    return true;
  }
};

const ab = {a:"1",b:"2"};
const ba = {a:"1",b:"2"};
const abc = {a:"1",b:"2",c:"3"};

console.log(eqObjects(abc,ba));


// eqObjects(ab,abc);
// assertEqual(eqObjects(ab,ba),true);
// assertEqual(eqObjects(ab,abc),false);
