#! /usr/bin/env node
//Nandini_Kaur 28-06-2024
/*
Array Destructuring: Given an array of objects representing different laptops, each with properties `make`, `model`, and `year`,
 use array destructuring to assign the first and second laptops to variables. Then, log these variables.
*/
let laptops = [
    { make: 'Lenovo', model: 'ThinkPad', year: 2021 },
    { make: 'Dell', model: 'XPS', year: 2020 },
    { make: 'HP', model: 'Pavilion', year: 2019 }
];
let [firstLaptop, secondLaptop] = laptops;
console.log(firstLaptop, secondLaptop);
export {};
