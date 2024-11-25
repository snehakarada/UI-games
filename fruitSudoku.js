let mistakes = 2;

const M = '🥭';
const G = '🥑';
const A = '🍎';

function trueMsg(userAnswer) {
  console.log('bravo! your are right ');
  return userAnswer;
}

function wrongMsg(boxNumber) {
  mistakes = mistakes - 1;
  if (mistakes === 0) {
    return 0;
  }

  console.log('NOPE ❌ you wrong you have', mistakes, 'more chances');
  return boxNumber;
}

function repeat(char, length) {
  let repeatedChar = '|';

  for (let iterate = 0; iterate <= length; iterate++) {
    repeatedChar += char;
  }

  return repeatedChar + '|\n';
}

function checkAnswer(boxNumber, userAnswer) {
  switch (+boxNumber) {
    case 2: return userAnswer === G ? trueMsg(userAnswer) : wrongMsg(boxNumber);
    case 3: return userAnswer === A ? trueMsg(userAnswer) : wrongMsg(boxNumber);
    case 4: return userAnswer === G ? trueMsg(userAnswer) : wrongMsg(boxNumber);
    case 6: return userAnswer === M ? trueMsg(userAnswer) : wrongMsg(boxNumber);
    case 7: return userAnswer === A ? trueMsg(userAnswer) : wrongMsg(boxNumber);
    case 8: return userAnswer === M ? trueMsg(userAnswer) : wrongMsg(boxNumber);
  }
  return '';
}

function getBox(number) {
  switch (number) {
    case 1: return '| 🥭';
    case 5: return '| 🍎';
    case 9: return '| 🥑';
  }
  return '|  ' + number;
}

function isEnd(number) {
  if (number % 3 === 0) {
    return '  |\n' + repeat('-', 12);
  }

  return '';
}

function getBoard(boxNumber, userAnswer) {
  let board = '';
  for (let number = 1; number <= 9; number++) {
    board += getBox(number, boxNumber, userAnswer) + isEnd(number);
  }
  return board;
}

function wholeBoard(boxNumber, userAnswer) {
  return repeat('-', 12) + getBoard(boxNumber, userAnswer);
}

function readBoard(string, index, updatedString, userAnswer, boxNumber) {
  if (index >= string.length) {
    return updatedString;
  }

  if (string[index] === boxNumber) {
    const a = checkAnswer(boxNumber, userAnswer)
    if (a === 0) {
      return 0;
    }
    updatedString += a;
    index++;
  }
  updatedString += string[index];
  return readBoard(string, index + 1, updatedString, userAnswer, boxNumber);
}

function fruitSudoku(string, times) {
  if (times === 0) {
    return 'you won the game';
  }
  const boxNumber = prompt('which box you want to fill');
  const userAnswer = prompt('Enter your answer');
  const a = readBoard(string, 0, '', userAnswer, boxNumber);
  if (a === 0) {
    return 'you lost your chances';
  }
  console.log(a);
  return fruitSudoku(a, times - 1);
}

function game1() {
  console.log('"WELOCOME TO FRUIT SUDOKU');
  console.log('rules: Each row and column should have only one type of friut🍇');
  console.log('you can do 1 mistake ');
  const string = wholeBoard(0, 0);
  console.log(string);
  const confirmation = confirm('do you want play');

  if (confirmation) {
    return fruitSudoku(string, 6);
  }
  return 'bye';

}
console.log(game1());

