function rotateDice() {
  return Math.ceil(Math.random() * 6);
}

function isMovePos(number, pos) {
  if (number === pos) {
    return true;
  }

  return false;
}

function repeat(char, length) {
  let repeatedChar = '';
  for (let iterate = 0; iterate <= length; iterate++) {
    repeatedChar += char;
  }

  return repeatedChar + '|';
}

function toShowLaddersInaBoard(number) {
  switch (number) {
    case 12:
    case 14:
    case 22:
    case 41:
    case 54: return '| 🪜' + number;
    case 4: return '| 🪜0' + number
  }
  return 1;
}

function toShowSnakesInaBoard(number) {
  switch (number) {
    case 96:
    case 94:
    case 75:
    case 48:
    case 37:
    case 28: return '| 🐍' + number;
  }
  return 1;
}

function getBox(number) {
  if (toShowLaddersInaBoard(number) !== 1) {
    return toShowLaddersInaBoard(number);
  }

  if (toShowSnakesInaBoard(number) !== 1) {
    return toShowSnakesInaBoard(number);
  }
  
  if (isMovePos(number, p1Pos)) {
    return '| ' + p1Symbol + '  ';
  }

  if (isMovePos(number, p2Pos)) {
    return '| ' + p2Symbol + '  ';
  }

  switch (number) {
    case 1: return '| ➡️  ';
    case 100: return '| 🏠  ';
  }

  if (number < 10) {
    return '| 0' + number + '  ';
  }

  return '| ' + number + '  ';
}

function isEnd(number) {
  if (number % 10 === 0) {
    return '|\n|' + repeat('-', 58) + '\n';
  }

  return '';
}

function getBoard() {
  let board = '';
  
  for (let number = 1; number <= 100; number++) {
    board += getBox(number) + isEnd(number);
  }

  return board;
}

function wholeBoard() {
  return '|' + repeat('-', 58) + '\n' + getBoard();
}

function checkingWinner(position , playerName) {
  if (position === 100) {
    console.log(playerName, ':', position, '     |', p2Name, ':', p2Pos);
    console.log('🏆🏆🏆', playerName, "is the winner 🏆🏆🏆");
    return 0;
  }

  return '';
}

function checkingPosExceeding(position, currentNumber, playerName) {
  if (p1Pos > 100) {
    position -= currentNumber;
    console.log(playerName, ', you are exceeding limit you need only', 100 - position);
  }

  return position;
}

function ladderUpdation(score, pName) {
  const isladder1 = score === 4 || score === 12 || score === 14;
  const isladder2 = isladder1 || score === 22 || score === 41 || score === 54;

  if (isladder2) {
    console.log(pName, ':HEY! you got a 🪜ladder🪜');
  }

  switch (score) {
    case 4: return 52;
    case 12: return 38;
    case 14: return 41;
    case 22: return 36;
    case 41: return 38;
    case 54: return 34;
    default: return 0;
  }

}

function snakeUpadation(score, pName) {
  const isSnake1 = score === 96 || score === 94 || score === 75;
  const isSnake2 = isSnake1 || score === 48 || score === 37 || score === 28;

  if (isSnake2) {
    console.log(pName, ':HEY! you got a 🐍snake🐍');
  }

  switch (score) {
    case 96: return 54;
    case 94: return 23;
    case 75: return 43;
    case 48: return 32;
    case 37: return 34;
    case 28: return 18;
    default: return 0;
  }
}

function player1Score() {
  prompt(p1Name, "press enter to rotate dice", 'press Enter');
  const p1CurrNum = rotateDice();
  console.log(p1CurrNum);
  p1Pos += p1CurrNum;

  p1Pos += ladderUpdation(p1Pos, p1Name);
  p1Pos -= snakeUpadation(p1Pos, p1Name);

  p1Pos = checkingPosExceeding(p1Pos, p1CurrNum, p1Name);

  return checkingWinner(p1Pos, p1Name);
}

function player2Score() {
  prompt(p2Name, "press enter to rotate dice", 'press Enter');
  const p2CurrNum = rotateDice();
  console.log(p2CurrNum);
  p2Pos += p2CurrNum;
  p2Pos += ladderUpdation(p2Pos, p2Name);
  p2Pos -= snakeUpadation(p2Pos, p2Name);
  p2Pos = checkingPosExceeding(p2Pos, p2CurrNum, p2Name);

  return checkingWinner(p2Pos, p2Name);
}

function gameStart() {
  console.clear();
  console.log(p1Name, p1Symbol, ':', p1Pos, '     |', p2Name, p2Symbol, ':', p2Pos);
  console.log(wholeBoard());

  const player1Move = player1Score();
  
  if (player1Move === 0) {
    return p1Name + p1Symbol + ':' + p1Pos + ' |' + p2Name + p2Symbol + ':' + p2Pos;
  }
  const player2Move = player2Score();

  if (player2Move === 0) {
    return p1Name + p1Symbol + ':' + p1Pos + ' |' + p2Name + p2Symbol + ':' + p2Pos;
  }
  console.log("wait until board moves!");
  for (let i = 0; i < 1500000000; i++) {};// for dealay

  return gameStart();
}


console.log('"WELCOME TO SNAKE 🐍 AND LADDER 🪜"')
const p1Name = prompt('enter player1 name:', 'ramesh');
const p2Name = prompt('enter player2 name:', 'suresh');

const p1Symbol = prompt('enter player1 Symbol:', '🏃‍➡️');
const p2Symbol = prompt('enter player2 Symbol:', '🏃‍♀️‍➡️');

let p1Pos = 1;
let p2Pos = 1;

console.log(gameStart());
