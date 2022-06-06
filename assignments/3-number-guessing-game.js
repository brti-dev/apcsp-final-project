// Create a game where the user has to guess the correct number,
// but there is a limit of how many guesses.
// If the user guess is right it should return "win".
// If the user guess is wrong it should return "die".
// If the user has no more guesses left, it should return "lose".

function createGuessingGame(correctNum, lives) {
  // Set local variable(s) here
  return {
    guess: function (n) {
      // Guess logic here
    },
  }
}

const game1 = createGuessingGame(1, 3)
console.log('guess 3 [expect "die"]: ' + game1.guess(3))
console.log('guess 2 [expect "die"]: ' + game1.guess(2))
console.log('guess 1 [expect "win"]: ' + game1.guess(1))

const game2 = createGuessingGame(1, 2)
console.log('guess 99 [expect "die"]: ' + game2.guess(99))
console.log('guess 99 [expect "lose"]: ' + game2.guess(99))
