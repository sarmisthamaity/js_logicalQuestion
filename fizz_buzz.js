let n=require("readline-sync");
let num=n.question("enter number: ");
if (num%3===0) {
    if (num%5===0) {
        console.log("Fizz_Buzz");
    }
    else {
        console.log("Buzz");
    }
}
else {
    console.log("Fizz");
}

