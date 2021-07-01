const n=require("readline-sync");
const num=parseInt(n.question("enter number: "));
for (let m=1;m<=num;m++) {
    for (let n=1;n<=10;n++) {
        multi=m*n;
        console.log(m+" "+'*'+" "+n+" "+'='+" "+multi);
    }
}

