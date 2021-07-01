function loginUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("my name is sarmi");
        },5000)
    })
};

function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("father name is swapan")
        },4000)
    })
};

function data(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("i love you jaan")
        },1000)
       
    })
    
}

async function callFun(){
    const loginuser = await loginUser();
    console.log(loginuser);
    const getuser = await getUser();
    console.log(getuser);
    const Data = await data();
    console.log(Data);
};
callFun();

