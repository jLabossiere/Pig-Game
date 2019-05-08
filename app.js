/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
const bothScores = document.getElementsByClassName('player-score')
for( let score of bothScores) {
  score.textContent = '0'
}

const bothCurScores = document.getElementsByClassName('player-current-score')
for( let score of bothCurScores) {
  score.textContent = '0'
}
const dicePic = document.querySelector('.dice')

const player1 = document.querySelector('.player-0-panel')
const player1ScBox = document.getElementById('score-0')
let player1Sc = 0

const player2 = document.querySelector('.player-1-panel')
let player2Sc = 0
const player2ScBox = document.getElementById('score-1')


let rollCuml = 0



function rollDice() {
  let roll = Math.ceil(Math.random() * 6)
  rollCuml += roll
  
  switch (`${roll}`) {
    case '1':
      dicePic.setAttribute('src', 'dice-1.png')
      break
    case '2':
      dicePic.setAttribute('src', 'dice-2.png')
      break
    case '3':
      dicePic.setAttribute('src', 'dice-3.png')
      break
    case '4':
      dicePic.setAttribute('src', 'dice-4.png') 
      break
    case '5':
      dicePic.setAttribute('src', 'dice-5.png')
      break
    case '6':
      dicePic.setAttribute('src', 'dice-6.png')
      break
  }

  if (roll === 1) {
    rollCuml = 0
    for( let score of bothCurScores) {
      score.textContent = '0'
    }
    player1ScBox.textContent = `${player1Sc}`
    player2ScBox.textContent = `${player2Sc}`
    player1.classList.toggle('active')
    player2.classList.toggle('active')
    alert ('1 HAS BEEN ROLLED')
  }
  
  if (player1.classList.contains('active')) {
    document.getElementById('current-0').textContent = `${rollCuml}`
    player1ScBox.textContent = `${player1Sc + rollCuml}`
    if (player1Sc + rollCuml >= 100) {
      alert('GAME HAS BEEN WON!!!')
    }
  } else if (player2.classList.contains('active')) {
    document.getElementById('current-1').textContent = `${rollCuml}`
    player2ScBox.textContent = `${player2Sc + rollCuml}`
    if (player2Sc + rollCuml >= 100) {
      alert('GAME HAS BEEN WON!!!')
    }
  }
} 

function holdDice(){
  if (player1.classList.contains('active')) {
    player1Sc += rollCuml
    player1ScBox.textContent = `${player1Sc}`

    rollCuml = 0

    player1.classList.toggle('active')
    player2.classList.toggle('active')

    for( let score of bothCurScores) {
      score.textContent = '0'
    }
  } else if (player2.classList.contains('active')) {
    player2Sc += rollCuml
    player2ScBox.textContent = `${player2Sc}`

    rollCuml = 0

    player1.classList.toggle('active')
    player2.classList.toggle('active')

    for( let score of bothCurScores) {
      score.textContent = '0'
    }
  }
}

function newGame(){
  player1Sc = 0
  player2Sc = 0
  for( let score of bothCurScores) {
    score.textContent = '0'
  }
  for( let score of bothScores) {
    score.textContent = '0'
  }
  rollCuml = 0
}


document.querySelector('.btn-roll').addEventListener('click', rollDice)
document.querySelector('.btn-hold').addEventListener('click', holdDice)
document.querySelector('.btn-new').addEventListener('click', newGame)