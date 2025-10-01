let score = 0;
function playgame(){
let getComputerChoice = () =>{
    return Math.floor(Math.random()*3);
}

let HumanChoice = () => {
    return  prompt("Enter your Choice(Rock, Paper, Scissor): ");
}

let getHumanChoice = (humchoice) => {
if(humchoice === "Rock") return 0;
if(humchoice === "Paper") return 1;
if(humchoice === "Scissor") return 2;
}

let ComputerChoice = (comchoice) => {
    if(comchoice === 0) return "Rock";
    if(comchoice === 1) return "Paper";
    if(comchoice === 2) return "Scissor";
}

let playRound = (compnum,humnum,compstr,humstr) => {
    if(compnum - humnum === -1 || compnum - humnum === 2){
        console.log(`You Won! ${humstr} beats ${compstr}.\n`);
        score = score + 1;
    }
    if(compnum - humnum === 1 || compnum - humnum === -2){
        console.log(`You Lost! ${compstr} beats ${humstr}.\n`);
        score = score - 1;
    }
}
let Humanstr = HumanChoice();
let HumanNumber = getHumanChoice(Humanstr);
let ComputerNumber = getComputerChoice();
let Computerstr = ComputerChoice(ComputerNumber);

playRound(ComputerNumber, HumanNumber, Computerstr, Humanstr);
console.log(`Score = ${score}\n`);
}



playgame();
playgame();
playgame();
playgame();
playgame();