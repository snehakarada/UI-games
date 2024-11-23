// if i tried to increse snake length it is distrubing box.


let length = 58;
let rat1Pos = 600;
let rat2Pos = 612;
let direct = 615;
let snake = '🐍';

function repeat(char) {
  let repeatedChar = '|';

  for (let iterate = 0; iterate <= length; iterate++) {
    repeatedChar += char;
  }

  return repeatedChar + '|\n';
}

function getBox(length) {
  if (length === 0) {
    return '';
  }

  return repeat(' ') + getBox(length - 1);
}

function isSnakeCrossingLeftBoarder(start) {
  const isCrossing = start === 620 || start === 558 || start === 496 || start === 434 || start === 124;

  return isCrossing || start === 372 || start === 310 || start === 248 || start === 186;
}

function isSnakeCrossingRightBoarder(start) {
  const isCrossing = start === 618 || start === 556 || start === 494 || start === 432 || start === 122;

  return isCrossing || start === 370 || start === 308 || start === 246 || start === 184;
}

function isSnakeCrossingBoarder(start) {
  if (start >= 0 && start <= 61) {
    return true;
  }

  if (start >= 621 && start <= 680) {
    return true;
  }

  if (isSnakeCrossingRightBoarder(start)) {
    return true;
  }

  if (isSnakeCrossingLeftBoarder(start)) {
    return true;
  }

  return false;
}

function placingSnakeAndRats(index, board, string) {
  let start = index;
  let updatedField = string;

  if (start === board.length) {
    return updatedField;
  }

  if (start === rat1Pos) {
    if (rat1Pos !== direct) {
      updatedField += '🥚';
      start = start + 2;
    }

    if (rat1Pos === direct) {
      rat1Pos = -1;
      snake += '🥚';
    }
  }

  if (start === direct) {
    if (isSnakeCrossingBoarder(start)) {
      return 0;
    }

    if (!isSnakeCrossingBoarder(start)) {
      updatedField += snake;
      start = start + 2;
    }
  }

  updatedField = updatedField + board[start];
  start = start + 1;

  return placingSnakeAndRats(start, board, updatedField);
}

function wholeField(length) {
  const board = repeat('-') + getBox(length - 1) + repeat('-');

  const updatedField = '';
  const index = 0;
  return placingSnakeAndRats(index, board, updatedField);
}

function eliminateExtraSpaces(wholeField) {
  let string = "";
  for (let index = 0; index < wholeField.length; index++) {

    string += wholeField[index];
  }

  return string;
}

function guideDirection() {
  if (rat1Pos === -1 && rat2Pos === -1) {
    return ' you ate all the eggs bye';
  }

  if (wholeField(10) === 0) {
    return 'HEY! you are out you are exceeding Boarder';
  }
  console.log(wholeField(10));
  // const snakeWithEgg = eliminateExtraSpaces(wholeField(10));
  // console.log(snakeWithEgg);

  console.log('select the direction to move the snake\n1. left\n2. right\n3. up\n4. down\n');
  const direction = +prompt('enter your choice');

  switch (direction) {
    case 1:
      direct -= 1;
      break;
    case 2:
      direct += 1;
      break;
    case 3:
      direct -= 62;
      break;
    case 4:
      direct += 62;
      break;
    default:
      console.log('end');
  }
  return guideDirection();
}

console.log(guideDirection());



