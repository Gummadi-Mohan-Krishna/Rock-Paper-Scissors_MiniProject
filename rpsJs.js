let choices=document.querySelectorAll(".choice");
let userScore=document.querySelector("#uscore");
let compScore=document.querySelector("#cscore");
let us=0;
let cs=0;
const msg=document.querySelector("#message");

choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

const compSelection=()=>{
    obj=["rock","paper","scissors"];
    ind=Math.floor(Math.random()*3);
    return obj[ind];
}

const playGame=(userChoice)=>{
    const compChoice=compSelection();
    gameResults(userChoice,compChoice);
}
const gameResults=(userChoice,compChoice)=>{
    if(userChoice===compChoice){
        msg.innerText="GAME DRAW!!!COMPUTER ALSO CHOOSE "+userChoice;
        msg.style.backgroundColor = "#081b31";
    }
    else if(userChoice==="rock"){
        if(compChoice==="scissors"){
            msg.innerText="YOU WON!!!COMPUTER CHOOSE "+compChoice;
            msg.style.backgroundColor = "green";
            us++;
            userScore.innerText=us;
        }
        else{
            msg.innerText="YOU LOST!!!COMPUTER CHOOSE "+compChoice;
            msg.style.backgroundColor = "red";
            cs++;
            compScore.innerText=cs;
        }
    }
    else if(userChoice==="paper"){
        if(compChoice==="rock"){
            msg.innerText="YOU WON!!!COMPUTER CHOOSE "+compChoice;
            msg.style.backgroundColor = "green";
            us++;
            userScore.innerText=us;
        }
        else{
            msg.innerText="YOU LOST!!!COMPUTER CHOOSE "+compChoice;
            msg.style.backgroundColor = "red";
            cs++;
            compScore.innerText=cs;
        }
    }
    else{
        if(compChoice==="paper"){
            mmsg.innerText="YOU WON!!!COMPUTER CHOOSE "+compChoice;
            msg.style.backgroundColor = "green";
            us++;
            userScore.innerText=us;
        }
        else{
            msg.innerText="YOU LOST!!!COMPUTER CHOOSE "+compChoice;
            msg.style.backgroundColor = "red";
            cs++;
            compScore.innerText=cs;
        }
    }
}
