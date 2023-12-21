let randomNumber= parseInt(Math.random()*100+1)
console.log(randomNumber);

let submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
console.log(userInput);


let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");

let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

const p =document.createElement('p');

let prevGuess=[]
let numGuess=1

let playGame=true;
if (playGame) {
    
    submit.addEventListener('click',function(e){
        e.preventDefault();
        console.log("inner");
        let guess=parseInt(userInput.value)
        console.log("guess",guess);
        ValidateGuess(guess)
    })
}



function ValidateGuess(guess){
    //
    if(isNaN(guess)){
        alert("Please enter Valide Number")
    }else if(guess<1){
        alert("please enter number greater than 1")
    }else if(guess>100){
        alert("Please enter a number less than 100 ")
    }else{
prevGuess.push(guess)
if(numGuess===11){
    DisplayGuess(guess)
    DisplayMessage(`Game over Random number was ${randomNumber}`)
    EndGame()
}else{
    DisplayGuess(guess)
    CheckGuess(guess)
}
    }
}
function CheckGuess(guess){
    //
    if(guess===randomNumber){
        DisplayMessage('You Guess it right')
        EndGame()
    }else if(guess<randomNumber){
        DisplayMessage('Number is ToLow...')
    }else if(guess>randomNumber){
        DisplayMessage('Number is ToHigh...')
    }
}

function DisplayGuess(guess){
    //
    userInput.value=''
    guessSlot.innerHTML +=`${guess}, `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function DisplayMessage(message){
    //
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
 function EndGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p .innerHTML=`<h2 id='newGame'> Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false;
    startGame()
 }
 function startGame(){
const newGameButton = document.querySelector("#newGame");
newGameButton.addEventListener('click',function(){
    randomNumber = parseInt(Math.random() * 100 + 1);
    guessSlot.innerHTML=''

    userInput.removeAttribute('disabled')
     prevGuess = [];
     numGuess = 1;
    startOver.removeChild(p)
      remaining.innerHTML = `${11 - numGuess}`;
  
playGame=true
window.location.reload()
})
 }


