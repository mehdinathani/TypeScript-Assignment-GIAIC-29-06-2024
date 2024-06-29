"use strict";
// 5- write a function that accepts array and return in reversed order
function reversedArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
// call the function 
console.log(reversedArray([1, 2, "a", "b"]));
