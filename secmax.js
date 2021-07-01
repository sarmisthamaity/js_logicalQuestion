var secMax = (arr) => {
    var arr;
    var i = 0;
    var max = 0
    var secmax = arr[0]
    while(i<arr.length){
        if(arr[i]>max){
            secmax = max
            max = arr[i]
        }
        else if(arr[i]>secmax){
            secmax = arr[i]
        }
        i++;
    }
    return secmax
}
console.log(secMax([12,0,78,21]))

