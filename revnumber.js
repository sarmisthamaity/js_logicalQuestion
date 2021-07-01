let n=require("readline-sync")
let num=n.question("enter number: ")
rev=0
while(num>0){
    rem=num%10
    rev=rev*10+rem
    num=~~(num/10)
}
console.log(rev)

