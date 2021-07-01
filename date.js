var n=require("readline-sync")
var weather=n.question("chose date: ")
let uberRent=new Promise(function(resolve,reject){
    const dateDetails={
        name:"mahi and banti",
        place:"Delhi Taj hotel",
        dat:25,
        dress:"western outfit"
    }
    d=dateDetails.name
    if(weather=="sunny"){
        const message=dateDetails.dat
        resolve(message)
    }else{
        reject("sad!,it's not possible")
    }  
})
const fixDate=(function(){
    uberRent.then(function(possible){
        console.log("I will go at",possible,"for date with",d)
    }).catch(function(error){
        console.log(error)
    })
})
fixDate()

    