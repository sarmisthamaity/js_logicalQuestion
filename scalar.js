function createArray(){
    const loopTime = require('readline-sync').question("loopTime: ");
    scalar_arr = [];
    index = 1;
    while(index <= loopTime){
        innerArray = [];
        for(let lIndex = 0; lIndex < loopTime;lIndex++){
            const readline = require('readline-sync').question("enter number: ");
            innerArray.push(Number(readline))
        }
        scalar_arr.push(innerArray);
        index++;
    }
    return scalar_arr
}

var findScalarmatrics = () =>{
    const callFun = createArray();
    let diognals = 0;
    constant = callFun[0][0]*callFun.length
    for(let callFunIndex = 0; callFunIndex < callFun.length; callFunIndex++){
        for(let arrayIndex = 0;arrayIndex < callFun[callFunIndex].length; arrayIndex++){
            if(callFunIndex === arrayIndex){
                diognals = diognals + callFun[callFunIndex][arrayIndex]
            }
        }
    }
    if(constant === diognals && diognals !== 0){
        return "scalar matrics"
    }else{
        return "non scalar matrics"
    }

}
console.log(findScalarmatrics());
