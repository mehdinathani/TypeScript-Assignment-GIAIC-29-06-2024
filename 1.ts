
function checkEvenOdd(num1 : number){
if (typeof(num1) == "number") {
    if ((num1 % 2) == 0) {
        console.log("Even");
        
    } else {
        console.log("Odd");
        
    }
} else {
    console.log("Not a Number");
    
}
}

checkEvenOdd(22);