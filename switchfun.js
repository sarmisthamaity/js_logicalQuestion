const readlinesync = require('readline-sync');
function calculator(num, num2, sign) {
    switch(sign){
        case "+":
            console.log(num + num2);
            break
        case "-":
            console.log(num - num2);
            break
        case "/":
            console.log(num / num2);
            break
        case '%':
            console.log(num % num2);
            break
        case "*":
            console.log(num * num2);
            break
        case "**":
            console.log(num ** num);
            break
    };
};
Num = readlinesync.questionInt("enter number: ");
num2 = readlinesync.questionInt("enter number2: ");
sign = readlinesync.question("enter sign? ");
calculator(Num, num2, sign);
