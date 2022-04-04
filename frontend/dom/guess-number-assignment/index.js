/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let newGameBtn = document.getElementById('new-game')
let randomNumber = Math.floor(Math.random() * 10) + 1
let message = document.getElementById('message')
let displayScore = document.getElementById('score')
let input = document.getElementById('input')
let checkBtn = document.getElementById('check')
let score = 10

// TODO: answer here


function displayMessage(msg) {
  // TODO: answer here
  if (score == 0){
    message.innerHTML = 'Oops, you lost the game'
  }else if(msg <= 0 || msg > 10){
    message.innerHTML = 'Guess any number between 1 and 10'
  }else if (msg == randomNumber){
    message.innerHTML = 'Yeay! you guessed it!'
  }else if (msg > randomNumber){
    message.innerHTML = "Oww... that's too big!"
    score--
    document.getElementById('score').innerHTML = score
  }else if (msg < randomNumber){
    message.innerHTML = 'Too small, buddy!'
    score--
    document.getElementById('score').innerHTML = score
  }
}

function resetGame() {
  // TODO: answer here
  score = 10
  document.getElementById('input').value = ''
  document.getElementById('message').innerHTML = 'Lets start guessing...'
  document.getElementById('score').innerHTML = score
  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber
}

function checkNumber() {
  // TODO: answer here
  displayMessage(input.value)
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber