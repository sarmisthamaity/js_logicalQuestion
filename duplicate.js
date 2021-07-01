var mixArray = ["a", "e", "r", "y", "u", "a", "r", "r", "a"];
let index = 0;
newlist = []
newObject = {}
for(let index = 0; index < mixArray.length; index++){
    if(!(newlist.includes(mixArray[index]))){
        newlist.push(mixArray[index])
    }
};

for(listIndex = 0; listIndex < newlist.length; listIndex++){
    let countElement = 0
    for(let i =0; i < mixArray.length; i++){
        if(newlist[listIndex] == mixArray[i]){
            countElement = countElement + 1
        };
        newObject[newlist[listIndex]] = countElement
    };
};

console.log(newObject);
