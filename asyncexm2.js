console.log("start");

function loginUser(email, passw, callback1){
    setTimeout(() => {
        console.log("trying to understand async..")
        callback1({Email: email, PASSW: passw})
    },1500)
}

function userDetails(name, callback12){
    setTimeout(() => {
        callback12({Name: name});
    },2000)
}


const user = loginUser("sami@gmail.com", 123445, (use) => {
    console.log(use);
    userDetails("sarmi", (d) => {
        console.log(d)
        userDetails("sarmi", (d) => {
            console.log(d)
            userDetails("sarmi", (d) => {
                console.log(d)
                userDetails("sarmi", (d) => {
                    console.log(d)
                    userDetails("sarmi", (d) => {
                        console.log(d)
                    })
                })
            })
        })
    })
})
console.log("finish");
