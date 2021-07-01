var atm_card=()=>{
    var r=require("readline-sync")
    var atm=r.question("enter ur atm correctly or not: ")
    if(atm=="chip_side") {
        lan=r.question("choose ur language: ")
        if(lan=="hindi" || lan=="english" || lan=="bengali") {
            acc=r.question("choose ur account: ")
            if(acc=="saving_acc" || acc=="current_acc") {
                pin=parseInt(r.question("enter ur pin: "))
                if(pin===2349) {
                    money=parseInt(r.question("enter your money: "))
                    if(money>100 || money<10000){
                        console.log("you can withdrawl money how much money u want")
                    }
                    else{
                        console.log("u can't withdrawl money")
                    }
                }
                else{
                    console.log("enter ur pin again")
                }
            }
            else{
                console.log("select ur account properly")
            }
        }
        else{
            console.log("another language u can't try")
        }
    }
    else{
        console.log("enter ur card correctly")
    }
}
atm_card()

