var array = [12,34,1,2,1,2,12,19];
var lis = []
for(let index = 0;index < array.length;index++){
    if(!(lis.includes(array[index]))){
        lis.push(array[index])
    }
}
console.log(lis);
