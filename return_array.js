function returnArray(){
    let arr=[12,34,0,6,7]
    let target=11
    var countr=0
    for(let index=0;index<arr.length;index++){
        if(arr[index+1]+arr[index]==target){
            return(arr)
        }
        else{
            countr=countr+1
        }
    }
    if(countr==(arr.length)){
        arr.splice(0,arr.length)
        return(arr)
    }
}
console.log(returnArray())

