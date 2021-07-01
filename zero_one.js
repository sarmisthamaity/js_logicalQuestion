let i=1
while(i<=5){
    let j=0
    let value=" "
    while(j<i){
        if((i+j)%2==1){
            value=value+"1"
        }
        else{
            value=value+"0"
        }
        j++;
    }
    i++;
    console.log(value)
}


