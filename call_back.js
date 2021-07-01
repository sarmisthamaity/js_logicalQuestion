const { question } = require("readline-sync");

function add_number(n,digit){
    let b=n+digit
    console.log(b)
}
c=require("readline-sync");
n=c.question("enter number: ")
digit=c.question("enter sec number: ")

function subtract_number(add_number) {
    let g=n-digit
    console.log(g)
}
subtract_number()




function world(callback){
    var i=0
    var sum=0
    while(i<10){
        sum=sum+i
        i++
    }
    callback(sum)
}
world((sum)=>{
    console.log(sum)
})

