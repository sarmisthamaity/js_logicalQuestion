var a=require("readline-sync");
var side=a.question("enter first side: ");
var sec_side=a.question("enter sec side: ");
var third_side=a.question("enter third_side: ");
if (side===sec_side){
    if (side===third_side) {
        console.log("Equilator triangle");
    }
}
else if (side===sec_side || sec_side===third_side || third_side===side) {
    console.log("Isosceles triangle");
}
else {
    console.log("Scalene triangle");
}


