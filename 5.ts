// 5- write a function that accepts array and return in reversed order

function reversedArray(arr:any[]) {
    let newArr: any[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

// call the function 
console.log(reversedArray([1,2,"a","b"]));

