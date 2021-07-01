let a=require("readline-sync");
let first_angle=parseInt(a.question("enter angle: "));
let sec_angle=parseInt(a.question("enter sec_angle: "));
let third_angle=parseInt(a.question("enter third_angle: "));
if (first_angle+sec_angle+third_angle===180) {
    console.log("this is possible triangle");
}
else {
    console.log("This is not possible triangle");
}
