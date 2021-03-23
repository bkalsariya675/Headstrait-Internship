var USERSELECTION, computerChoice, results, COMPUTERSELECTION;
function func(id){
    if(id==='r'){
    USERSELECTION = document.getElementById("r").innerHTML;
    document.getElementById("user").innerHTML = USERSELECTION;
    computerChoice = random();
    check(USERSELECTION, computerChoice);
    }
    else if(id==='p'){
        USERSELECTION = document.getElementById("p").innerHTML;
        document.getElementById("user").innerHTML = USERSELECTION;
        computerChoice = random();
        check(USERSELECTION, computerChoice);
    }
    else{
        USERSELECTION = document.getElementById("s").innerHTML;
        document.getElementById("user").innerHTML = USERSELECTION;
        computerChoice = random();
        check(USERSELECTION, computerChoice);
    }
}

function random(){
    COMPUTERSELECTION = Math.random();
    if (COMPUTERSELECTION < 0.34) {
        COMPUTERSELECTION = document.getElementById("comp").innerHTML ="✊";
        return COMPUTERSELECTION;
    } else if(COMPUTERSELECTION <= 0.67) {
        COMPUTERSELECTION = document.getElementById("comp").innerHTML ="✋";
        return COMPUTERSELECTION;
    } else {
        COMPUTERSELECTION = document.getElementById("comp").innerHTML ="✌";
        return COMPUTERSELECTION;
    }
}
var check = function(choice1, choice2){
    if(choice1===choice2){
        document.getElementById("output").innerHTML = "DRAW";
    }
    if(choice1==="✊"){
        if(choice2==="✌"){
            // return("You Win!");
            document.getElementById("output").innerHTML = "WIN";
        }else{
            // return "You lose! Try again.";
            document.getElementById("output").innerHTML = "LOSE"
        }
    }
    if (choice1 === "✋") {
        if (choice2 === "✊") {
            // return "You win!";
            document.getElementById("output").innerHTML = "WIN"
        } else {
            // return "You lose! Try again.";
            document.getElementById("output").innerHTML = "LOSE";
        }
    }
    if (choice1 === "✌") {
        if (choice2 === "✊") {
            // return "You lose! Try again.";
            document.getElementById("output").innerHTML = "LOSE";
        } else {
            // return "You win!";
            document.getElementById("output").innerHTML = "WIN";
        }
    }
};

// function rock(){
//     USERSELECTION = document.getElementById("r").innerHTML;
//     document.getElementById("user").innerHTML = USERSELECTION;
//     // console.log(USERSELECTION);
//     computerChoice = random();
//     results = check(USERSELECTION, computerChoice);
//     // console.log(results);
//     // alert(results);
//     // console.log(computerChoice);
// }
// function paper(){
//     USERSELECTION = document.getElementById("p").innerHTML;
//     document.getElementById("user").innerHTML = USERSELECTION;
//     // console.log(USERSELECTION);
//     computerChoice = random();
//     check(USERSELECTION, computerChoice);
//     // console.log(results);
//     // return results;

//     // console.log(computerChoice);
// }
// function scissor(){
//     USERSELECTION = document.getElementById("s").innerHTML;
//     document.getElementById("user").innerHTML = USERSELECTION;
//     // console.log(USERSELECTION);
//     computerChoice = random();
//     results = check(USERSELECTION, computerChoice);
//     // console.log(results);

//     // console.log(computerChoice);
// }