let n=require("readline-sync")
let num=n.question("enter number")
const evenNumber= new Promise((resolve,reject)=>{
    if (num %2===0){
        resolve("number is even  number")
    }
    else{
        reject("number is odd number")
    }
})
evenNumber.then((data)=>{
    console.log(data)
})
evenNumber.catch((err)=>{
    console.log(err)
})
