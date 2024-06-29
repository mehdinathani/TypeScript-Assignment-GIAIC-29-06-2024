"use strict";
// funtion to find and return largest anumber
function findLargest(arr) {
    let largestNumber = 0;
    arr.forEach(num1 => {
        if (num1 > largestNumber) {
            largestNumber = num1;
        }
    });
    return largestNumber;
}
console.log(findLargest([1, 2, 3, 10, 9]));
