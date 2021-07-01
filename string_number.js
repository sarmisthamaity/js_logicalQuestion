var array = ["one", "2", "sarmis", "5", "none"];
var lis = [];
var index = 0;
while(index <array.length){
    var convert = Number(array[index]);
    if(convert == NaN){
        lis.push(String(array[index]))
    }else{
        lis.push(array[index])
    }
    index++;
}
console.log(lis);

