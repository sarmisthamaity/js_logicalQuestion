const primeDigit=new Promise((resolve,reject)=>{
    let li=[23,12,8,37,53]
    var f=[]
    let i=0;
    while(i<li.length){
        let j=2;
        let d=li[i]
        let count=0;
        while(j<=d){
            if(d%j==0){
                count=count+1
            }
            j++;
        }
        if(count==1){
            f.push(d)
            resolve(f)
        }
        else{
            reject(f)
        }
        i++;
    }
})
primeDigit.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

