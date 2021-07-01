console.log("start");

function loginUser(gmail,pass){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({Gmail: gmail, PASS: pass})
        },1000)
    })
}

function getUservideos(gmail){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["videos", "videos1"])
        },2000)
    })
}

function videoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("something")
        },3000)
    })
}


loginUser("gmail.com", 12344)
    .then(result => console.log(getUservideos(result.gmail)))
    .then(result2 => console.log(videoDetails(result2)))
    .then(result3 => console.log(result3))

console.log("finish");


