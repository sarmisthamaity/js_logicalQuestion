var n=require("readline-sync");
var lop_time=n.question("enter loop time: ");
var mini=0;
var mini_lis=[ ]
for (let m=1;m<=lop_time;m++) {
    var num=n.question("enter your number: ");
    mini_lis.push(num)
}
for (let n=0;n<mini_lis.length;n++) {
    if (mini>mini_lis[n]){
        mini=mini_lis[n]
    }
}
console.log(mini)

