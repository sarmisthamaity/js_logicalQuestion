function palindrome_number(num) {
    var sum=0;
    var real_num=num;
    while (num>0) {
        let rem=num%10;
        num=parseInt(num/10);
        console.log(num)
        sum=sum*10+rem;
        console.log(sum)
    }
    if (real_num===sum) {
        return "palindrome number";
    }
    else {
        return "not palindrome";
    }
}
let n=require("readline-sync");
let digit=parseInt(n.question("enter number: "))
console.log(palindrome_number(digit))





