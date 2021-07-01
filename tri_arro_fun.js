var ch="";
triangle=(user)=>{
    for(let i=1;i<=user;i++) {
        for(let j=i;j<=i;j++) {
            ch=ch+"*"
            console.log(ch)
        }
    }
}
tri=require("readline-sync");
s=parseInt(tri.question("enter number: "))
triangle(s)

