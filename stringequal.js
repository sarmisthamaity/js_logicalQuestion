var array = ["aba", "121", "sdfghj", "opo"];
var arr = [];
var count = 0;
for(let index = 0;index<array.length;index++){
    if((array[index]).length > 1 && array[index][0] == array[index][-1]){
        count = count + 1
    }
};
console.log(arr);
console.log(count);
