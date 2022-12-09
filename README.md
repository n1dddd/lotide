# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @senivd/lotide`

**Require it:**

`const _ = require('@senivd/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters`: Counts the instances a character is observed within a string
* `countOnly`: Counts the instance of a given property within an object, depending on if the property is within the object or not.
* `eqArrays`: Returns true if two arrays are equal, or false if not.
* `eqObjects`: Returns true if two objects are equal, or false if not.
* `findKey`: Returns the property of a specific key.
* `findKeyByValue`: Returns the keys of a specified property.
* `flatten`: Returns a complete array, from a nested array (only capable of 1 nest, not nests within nests).
* `head`: Returns the first index of an array.
* `letterPositions`: Returns what the index that a specified character is populating, within a string.
* `middle`: Returns the middle value of an array. If two middle values (array that has a even number of values), returns both numbers. If odd valued array, returns only the middle value.
* `tail`: Returns all indices of an array, except the first one.
* `map`: Returns a new array, populated with the results of calling a callback function on the elements in the array.
* `takeUntil`: Returns a new array, populated with the results of calling a callback function the the elements in the array. Terminates array population if stop condition is satisfied.
* `without`: Returns a new array, omitting the specific function argument (itemsToRemove)