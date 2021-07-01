const yt = new Promise((resolve, rej) => {
    setTimeout(() => {
        resolve({data: "get staff from yt"})
    },2000)
})  

const fb = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("get staff from gb")
    })
})

Promise.all([yt, fb]).then(result => {
    console.log([result])
});
