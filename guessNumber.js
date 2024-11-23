function repeatGame() {
  console.log('sorry you lost the game😔');
  const repeat = confirm("Do you want to play again😉");

  return repeat ? guessNumber(chances) : 'thanks for playing🤗bye 👋';
}

function guessNumber(choices) {
  const userGuess = prompt("guess the number:");
  const randomNum = Math.ceil(Math.random() * 10);

  if (choices === 1) {
    return repeatGame();
  }

  if (userGuess === randomNum) {
    return "HEY! you won the game...🏆";
  }

  const diff  = Math.abs(userGuess - randomNum);

  let feedback = 'your guess is ';
  feedback += diff < 3 ? 'close to secret guess' : 'far away from secret guess';

  console.log('\n', feedback + " this is the last chance try your best🥵");

  return guessNumber(choices - 1)
}

const chances = 2;

console.log(" 💡guess the number between 1 to 9 in TWO chances 💡");
console.log(guessNumber(chances));
