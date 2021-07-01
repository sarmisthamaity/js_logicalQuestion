d=require("readline-sync");
n=parseInt(d.question("enter number: "));
li=[]
for(let i=1;i<=n;i++) {
    li.push(i)
}
var b=parseInt(li.length/2)
let l=[];
let lis=[ ]
var m=b;
for(var j=0;j<b;j++) {
    l.push(li[j])
    lis.push(li[m])
    m++;
}
console.log(l)
console.log(lis)

