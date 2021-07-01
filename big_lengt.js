st=require("readline-sync")
stri=st.question("enter any string: ")
i=0
lis=[]
number=0
while(i<stri.length){
    if(!(lis.includes(stri[i]))){
        lis.push(stri[i])
        number=number+1
    }
    i++
}
console.log(number)
