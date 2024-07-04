#! /usr/bin/env node
//Nandini_Kaur 28-06-2024
/*
Combining Arrays with Spread Operator: Suppose you are comparing prices of two different sets of laptops.
 Use the spread operator to combine these arrays into a single array sorted in ascending order,
 then log the result.
*/
let laptopSet1 = [20000, 25000, 30000];
let laptopSet2 = [30000, 40000, 35000];
let combinedLaptopSets = [...laptopSet1, ...laptopSet2];
combinedLaptopSets.sort((a, b) => a - b);
console.log(combinedLaptopSets);
export {};
