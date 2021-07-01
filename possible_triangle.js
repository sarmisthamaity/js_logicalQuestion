var s=require("readline-sync");
var first_side=parseInt(s.question("enter angle: "));
var sec_side=parseInt(s.question("enter angle: "));
var third_side=parseInt(s.question("enter angle: "));
if(first_side+sec_side>third_side) {
    if (sec_side+third_side>first_side) {
        if (third_side+first_side>sec_side) {
            console.log("possible triangle");
        }
    }
}
else {
    console.log("This triangle is not possible");
}

