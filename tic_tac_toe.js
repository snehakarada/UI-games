function repeat(char, length) {
  let repeatedChar = '|';

  for (let iterate = 0; iterate <= length; iterate++) {
    repeatedChar += char;
  }

  return repeatedChar + '|\n';
}

function getBox(number) {
  return '|  ' + number;
}

function isEnd(number) {
  if (number % 3 === 0) {
    return '  |\n' + repeat('-', 12);
  }

  return '';
}

function getBoard() {
  let board = '';
  for (let number = 1; number <= 9; number++) {
    board += getBox(number) + isEnd(number);
  }
  return board;
}

function wholeBoard() {
  return repeat('-', 12) + getBoard();
}

function isSubStringMatch(string, index, endIndex, subString) {
  let stringToCheck = '';

  for (let stringIndex = index; stringIndex < endIndex; stringIndex++) {
    stringToCheck = stringToCheck + string[stringIndex];
  }
  return stringToCheck === subString;
}

function isSubstring(string, subString) {
  let count = 0;

  for (let index = 0; index < string.length; index++) {

    for (let i = 0; i < subString.length; i++) {
      const isItMatching = isSubStringMatch(string, index, index + 1, subString[i]);
      count += isItMatching ? 1 : 0;
    }
  }

  return count === 3;
}

function checkWinner(userInput) {
  const combinations = ['123', '456', '789', '147', '258', '369', '159', '357'];

  for (let i = 0; i < combinations.length; i++) {
    if (isSubstring(combinations[i], userInput)) {
      return true;
    }
  }

  return 0;
}

function recordingUserMoves(userInput) {
  if (count % 2 === 0) {
    user1 += userInput;
  }

  if (count % 2 !== 0) {
    user2 += userInput
  }

  if (checkWinner(user1)) {
    console.log('🏆🏆🏆user1 is the winner 🏆🏆 🏆');
    return 0;
  }

  if (checkWinner(user2)) {
    console.log('🏆🏆🏆user2 is the winner 🏆🏆 🏆');
    return 0;
  }

  return '';
}

function updatedBoard(string, userInput, index, newBoard) {
  if (index === string.length) {
    return newBoard;
  }

  if (string[index] === userInput) {
    if (recordingUserMoves(userInput) === 0) {
      return 0;
    }

    let symbol = count % 2 === 0 ? 'O' : 'X';
    count += 1;
    newBoard += symbol;
    index++;
  }

  newBoard += string[index];
  return updatedBoard(string, userInput, index + 1, newBoard);
}



function gameStart(string) {
  if (count === 9) {
    return 'draw';
  }
  const userInput = prompt("enter position");

  if (userInput > 9 || userInput < 1) {
    console.log('Invalid Input');
    gameStart(string);
  }

  string = updatedBoard(string, userInput, 0, '');
  if (string === 0) {
    return 'game over';
  }

  console.log(string);

  return gameStart(string);
}

let user1 = '';
let user2 = '';
let count = 0;
const board = wholeBoard();
console.log(board);
console.log(gameStart(board));

