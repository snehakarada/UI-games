// worng msg is not working
// maintain mistake count
// good messages 
// table is not updatinf for every user entered value.

const M = '🥭';
const G = '🥑';
const A = '🍎';

function trueMsg(userAnswer) {
  console.log('bravo! your are right ');
  return '| ' + userAnswer;
}

function wrongMsg(boxNumber) {
  console.log('NOPE ❌ you wrong');
  return '|  ' + boxNumber;
}

function repeat(char, length) {
  let repeatedChar = '';
  for (let iterate = 0; iterate <= length; iterate++) {
    repeatedChar += char;
  }

  return repeatedChar + '|';
}

function checkAnswer(boxNumber, userAnswer) {
  switch (boxNumber) {
    case 2: return userAnswer === G ? trueMsg(userAnswer) : wrongMsg(boxNumber);
    case 3: return userAnswer === A ? trueMsg(userAnswer) : wrongMsg(boxNumber);
    case 4: return userAnswer === G ? trueMsg(userAnswer) : wrongMsg(boxNumber);
    case 6: return userAnswer === M ? trueMsg(userAnswer) : wrongMsg(boxNumber);
    case 7: return userAnswer === A ? trueMsg(userAnswer) : wrongMsg(boxNumber);
    case 8: return userAnswer === M ? trueMsg(userAnswer) : wrongMsg(boxNumber);
  }
}

function getBox(number, boxNumber, userAnswer) {

  if (number === boxNumber) {
    return checkAnswer(boxNumber, userAnswer);
  }

  switch (number) {
    case 1: return '| 🥭';
    case 5: return '| 🍎';
    case 9: return '| 🥑';
  }
  return '|  ' + number;
}

function isEnd(number) {
  if (number % 3 === 0) {
    return '  | ' + '\n' + '|' + repeat('-', 12) + '\n';
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
  return '|' + repeat('-', 12) + '\n' + getBoard(boxNumber, userAnswer);
}

function fruitSudoku(string) {
  const boxNumber = +prompt('which box you want to fill');
  const userAnswer = prompt('Enter your answer');
  const a = string + wholeBoard(boxNumber, userAnswer);
  console.log(a);
  return fruitSudoku();
}

function game1() {
  console.log('"WELOCOME TO FRUIT SUDOKU');
  console.log('rules: Each row and column should have only one type of friut🍇');
  console.log('you can do 1 mistake ');
  const string = wholeBoard(0, 0);
  console.log(string);
  const confirmation = confirm('do you want play');

  if (confirmation) {
    fruitSudoku(string);
  }
  console.log('bye 👋');

}
game1();

