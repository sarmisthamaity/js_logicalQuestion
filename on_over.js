mainstr="the quick brown fox jumped over the lazy dog,the dog slept over the verandha"
substr="over"
str1="on"
splite_mainstr=mainstr.split(" ")
// console.log(splite_mainstr)
indecies=0
store_str=" "
while(indecies<splite_mainstr.length){
    if(splite_mainstr[indecies]==substr){
        store_str=store_str+str1+" "
    }
    else{
        store_str=store_str+splite_mainstr[indecies]+" "
    }
    indecies++;
}
console.log(store_str)

