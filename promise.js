const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
    if(1>6){
    resolve("trying to understand the promise....")
    }
    reject(new Error("error is disgusting..."))
   },1000)
})

promise.then(result => {
    console.log(result)
}).catch(err => {
    console.log(err.message)
})

