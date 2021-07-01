var str = "sarmi6stha"
function checkNumber(){
    var index = 0;
    while(index<str.length){
    if(str[index] > 0 || str[index] < 0){
        flag = true
        break
    }else{
        flag = false
        }
    index++;
    };
    return flag;
}
console.log(checkNumber(str))





