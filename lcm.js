LCM=(n,num)=>{
    let i=1;
    if(n>num){
        lcm=n;
    }
    else{
        lcm=num;
    }
    while(i<lcm){
        if(n%i==0 && num%i==0){
            gcd=i
        }
        i++;
    }
    lcm=(n*num)/gcd
    console.log(lcm)
}
s=require("readline-sync");
n=s.question("enter number: ")
num=s.question("enter sec_number: ")
LCM(n,num)

