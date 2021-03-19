// Define variables
let choices = ["rock", "paper", "scissors"];
let rounds = 0;
let userScore = 0;
let compScore = 0;

// DOM selectors
const btns = document.querySelectorAll('.btn-dark');
const userWeapon = document.querySelector('.player-select');
const resultImg = document.querySelector('#result-img');
const resultTxt = document.querySelector('#result-text');


// Computer Random Choice
function computerPlay() { 
  const compResult = choices[Math.floor(Math.random() * choices.length)];
  return compResult;
}


// Compare user vs comp and increase rounds
function playRound(userPlay, compResult) {
  rounds ++; 
  switch(true) {
    case (userPlay === compResult): 
      resultImg.src = "images/draw.jpeg";
      resultTxt.innerHTML = "Standoff...You are both considering the choices which led you here..."
        break;
    case (compResult == "rock" && userPlay == "scissor"):
    case (compResult == "scissors" && userPlay == "paper"):
    case (compResult == "paper" && userPlay == "rock"):
      resultImg.src = "images/Bathroomdeath.png";
      resultTxt.innerHTML = "Outsmarted by Jigsaw, think more careully...";
      compScore += 1; 
        break;
    default:
      resultImg.src = "images/playerwin.jpeg";
      resultTxt.innerHTML = "Jigsaw wasn't expecting that, smart move..."
      userScore += 1;   
  }

}


// Decide Winner and display result
function decideWinner(userScore, compScore) {
  if(rounds === 5) {
    if (compScore > userScore) {
      alert('Unlucky, you lost');
    } else if (userScore > compScore) {
      
      alert(`It's a horror movie first, you've escaped`);
    } else {
      
      alert('No-one has triumphed. This hapless purgatory continues..');
    }
  }
}


//Check how many rounds
function endGame(rounds) {
  if(rounds === 5) {
    btns.forEach((btn) => {
      btn.classList.add('disabled');
      btn.disabled = true;
    });
  }
}


//Begin Game on User Choice Button
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let userPlay = event.target.textContent.toLowerCase();
        console.log(userPlay);
        // Fill in Player Select Box
        userWeapon.innerText = event.target.textContent;
        // play a round
        playRound(userPlay, computerPlay());
        //Check how many rounds
        endGame(rounds);
        decideWinner(userScore, compScore);
    })
  })

  




