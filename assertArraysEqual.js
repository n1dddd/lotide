const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    console.log("The two arrays are not equal!");
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log("The two arrays are not equal!");
      return false;
    }
    if (array1[i] === array2[i]) {
      console.log("The two arrays are equal!");
      return true;
    }
  }
};
eqArrays([1,2,3],[1,2,3]);
eqArrays([1,2,3],[1,2,3,4]);
eqArrays([1,2,4],[1,2,3]);
eqArrays([1,2,4],[1,2,'4']);