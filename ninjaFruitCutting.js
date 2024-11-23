const length = 58;
let position = 615;
let field = '';
let coins = -1;

function randomFruitIndexes(from, to) {
  return from + Math.round(Math.random() * (to - from));
}

function isCharThere(char, field, position) {
  return field[position] === char || field[position + 1] === char;
}

function checkValidIndexOfKnife(position, field) {
  const isHyphenThere = isCharThere('-', field, position);
  const isVerticalBarThere = isCharThere('|', field, position);
  const isNewLineThere = isCharThere('\n', field, position);

  if (isHyphenThere || isVerticalBarThere || isNewLineThere) {
    return 0;
  }

  return coins;
}

function checkValidIndexOfFruits(randomPos, field) {
  const isHyphenThere = isCharThere('-', field, randomPos);
  const isVerticalBarThere = isCharThere('|', field, randomPos);
  const isNewLineThere = isCharThere('\n', field, randomPos);

  if (isHyphenThere || isVerticalBarThere || isNewLineThere) {
    checkValidIndexOfFruits(randomFruitIndexes(65, 650), field);
  }

  return randomPos;
}


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

function placingNinjaAndFruits(startIndex, board, string) {
  let index = startIndex;
  let updatedField = string;

  if (index === board.length) {
    return updatedField;
  }

  if (index === fruitPos) {
    if (fruitPos !== position) {
      updatedField += '🍎';
      index = index + 2;
    }

    if (Math.abs(fruitPos - position) < 3) {
      coins = coins + 5;
      fruitPos = checkValidIndexOfFruits(randomFruitIndexes(65, 650), field);
    }
  }

  if (index === position) {
    if (checkValidIndexOfKnife(position, field) === 0) {
      return 0;
    }
    updatedField += '🥷🏻';
    index = index + 2;
  }

  updatedField = updatedField + board[index];
  index = index + 1;

  return placingNinjaAndFruits(index, board, updatedField);
}

function wholeField(length) {
  const board = repeat('-') + getBox(length - 1) + repeat('-');
  field = board;
  let updatedField = '';
  let startIndex = 0;

  return placingNinjaAndFruits(startIndex, board, updatedField);
}


function guideDirection() {
  console.log('coins ::', coins, '🪙');

  if (wholeField(10) === 0) {
    return 'HEY! you are out you touched the boarder';
  }

  console.log(wholeField(10));

  console.log('select the direction to move ninja\n1. left\n2. right\n3. up\n4. down\n');
  const direction = +prompt('enter your choice');

  switch (direction) {
    case 1:
      position -= 1;
      break;
    case 2:
      position += 1;
      break;
    case 3:
      position -= length + 4;
      break;
    case 4:
      position += length + 4;
      break;
    default:
      console.log('enter correct key');
  }

  return guideDirection();
}

function gameStart() {
  if (confirmation) {
    console.log(guideDirection());
    position = 615;
  }

  if (!confirmation) {
    return 'thanks for coming bye 👋';
  }
  confirmation = confirm('Do you want to play again 😉');

  return gameStart();
}

let fruitPos = checkValidIndexOfFruits(randomFruitIndexes(65, 650), field);
console.log('🔪🥑HELLO! WELCOME TO NINJA FRUIT CUTTING🍎🔪');
console.log('In this game you have to cut the fruits without touching the field boarder');
console.log("for every fruit you will got 5 coins🪙\n");

let confirmation = confirm('do you want to play');
console.log(gameStart(confirmation));


