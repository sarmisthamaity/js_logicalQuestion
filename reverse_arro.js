let reverse=(n)=>{
    for (let i=n;i>0;i--) {
        console.log(i)
    }
}
let b=require("readline-sync");
let num=b.question("enter number: ");
reverse(num)
