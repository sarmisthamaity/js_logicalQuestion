question_list = [
	"How many continents are there?",  			// pehla question
	"What is the capital of India?",			//doosra question
	"NG mei kaun se course padhaya jaata hai?"	//teesra question
]

options_list = [
	//pehle question ke liye options
	["Four", "Nine", "Seven", "Eight"],
	//second question ke liye options
	["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    //third question ke liye options
	["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
fifty_list=[["seven","eight"],["Delhi","chennai"],["Tourism","Software Engineering"]]
//har ek question ke liye, uski solution key (yeh index nahi hai)
solution_list = [3, 4, 1]
fifty_solution=[1,1,2]
var hin=0;
for (let i=0;i<question_list.length;i++) {
    console.log(question_list[i])
    for (let j=0;j<options_list[i].length;j++) {
        console.log(j+1 +" "+ options_list[i][j])
    }
    var n=require("readline-sync");
    var choose_ans=(n.question("enter your answer/hint: "))
    if (hin===0) {
        if (choose_ans=="hint") {
            for (var m=0;m<fifty_list[i].length;m++) {
                console.log(m+1 +" "+fifty_list[i][m])
            }
            var fi=require("readline-sync");
            var fifty_ans=fi.question("choose your answer: ")
            if (fifty_ans==fifty_solution[i]){
                console.log("answer is right")
            }
            else {l
                console.log("answer is wrong")
                break
            }
        hin=hin+1
        }
    else {
        console.log("you can,t use hint")
        console.log(i+1 +" "+question_list[i])
    }
    }
    else if (choose_ans==solution_list[i]) {
        console.log("congrates! your answer is right")
    }
    else {
        console.log("sadly! your answer is wrong")
        break
    }
}

