const assertEqual = require('../assertEqual');
const tail = require('../tail');

const array = ["Yo Yo", "Lighthouse", "Labs"];
tail(array); // no need to capture the return value since we are not checking it
assertEqual(array.length, 3); // original array should still have 3 elements!