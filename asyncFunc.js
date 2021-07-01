console.log("start");

const items = [1,3,4,5,6,78];
items.forEach((item) => {
    console.log(item)
})

setTimeout(() => {
    let i=0;
    do{
        console.log(i);
        i++;
    }while(i<3);
},1000)

console.log("end");
