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
    let dumy;
    if(userChoice===compChoice){
        dumy="GAME DRAW!!!COMPUTER ALSO CHOOSE "+userChoice;
        msg.innerText=dumy.toUpperCase();
        msg.style.backgroundColor = "#081b31";
    }
    else if(userChoice==="rock"){
        if(compChoice==="scissors"){
            dumy="YOU WON!!!COMPUTER CHOOSE "+compChoice;
            msg.innerText=dumy.toUpperCase();
            msg.style.backgroundColor = "green";
            us++;
            userScore.innerText=us;
        }
        else{
            dumy="YOU LOST!!!COMPUTER CHOOSE "+compChoice;
            msg.innerText=dumy.toUpperCase();
            msg.style.backgroundColor = "red";
            cs++;
            compScore.innerText=cs;
        }
    }
    else if(userChoice==="paper"){
        if(compChoice==="rock"){
            dumy="YOU WON!!!COMPUTER CHOOSE "+compChoice;
            msg.innerText=dumy.toUpperCase();
            msg.style.backgroundColor = "green";
            us++;
            userScore.innerText=us;
        }
        else{
            dumy="YOU LOST!!!COMPUTER CHOOSE "+compChoice;
            msg.innerText=dumy.toUpperCase();
            msg.style.backgroundColor = "red";
            cs++;
            compScore.innerText=cs;
        }
    }
    else{
        if(compChoice==="paper"){
            dumy = "YOU WON!!! COMPUTER CHOSE " + compChoice;
            msg.innerText = dumy.toUpperCase();
            msg.style.backgroundColor = "green";
            us++;
            userScore.innerText=us;
        }
        else{
            dumy="YOU LOST!!!COMPUTER CHOOSE "+compChoice;
            msg.innerText=dumy.toUpperCase();
            msg.style.backgroundColor = "red";
            cs++;
            compScore.innerText=cs;
        }
    }
}
