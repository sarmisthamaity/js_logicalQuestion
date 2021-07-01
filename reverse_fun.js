function reverse_number(n) {
    let sum=0;
    while (n>0) {
        let rem=n%10
        sum=sum*10+rem
        n=n/10
        n=~~n
    }
    return sum
}
var v=require("readline-sync");
var digit=v.question("enter number: ");
console.log(reverse_number(digit))
