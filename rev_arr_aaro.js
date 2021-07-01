lis=[ ]
rev_arr=(l)=>{
    for(let i=1;i<=l;i++) {
        lis.push(i)
    }
    console.log(lis)
    var li=[]
    for (let j=lis.length-1;j>=0;j--) {
        li.push(lis[j])
    }
    console.log(li)
}
n=require("readline-sync");
num=parseInt(n.question("enter number: "))
rev_arr(num)

