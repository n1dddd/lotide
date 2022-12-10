//Function that takes in two arguments (allItems, itemsToCount)
//initialize empty object...results
//Loop over allItems (names in this case)
//If the boolean value of itemToCount is truthy, increase the counter of said item, else ignore keeping counting
//If the item has another instance, increase count
//Else, return 1, or single counted instance
//Return counts of specific items
//Return undefined if the itemsToCount does not match any item in the object

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item])
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
  }
  return results;
};

module.exports = countOnly;

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

//const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];
// const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);



