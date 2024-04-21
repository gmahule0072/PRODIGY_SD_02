let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let guess = parseInt(document.getElementById('guess').value);
  attempts++;

  if (guess === secretNumber) {
    document.getElementById('message').innerText = `Congratulations! You've guessed the number ${secretNumber} correctly!`;
    document.getElementById('attempts').innerText = `It took you ${attempts} attempts to win the game.`;
  } else if (guess < secretNumber) {
    document.getElementById('message').innerText = 'Too low! Try again.';
  } else {
    document.getElementById('message').innerText = 'Too high! Try again.';
  }
}
