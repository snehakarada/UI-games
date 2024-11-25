const player1Name = prompt("enter player1 name");
const player2Name = prompt('enter player2 name');

let player1Score = 0;
let player2Score = 0;



function rotateDice() {
  return Math.ceil(Math.random() * 6);
}

function gettingNumberToContinueOrExit(playerName) {
  const opinion = confirm(playerName + ' : do you want to rotate dice');

  if (opinion) {
    return rotateDice();
  }

  return confirm('do you want to exit game') ? 'ok' : continueMsg();
}

function refresh() {
  player1Score = 0;
  player2Score = 0;
  return gamestart()
}

function printingExceedingMsg(playerName) {
  console.log(playerName, 'exceeding score limit, you want only ', 100 - player1Score);
}

function continueMsg() {
  const conMsg = confirm('do you want to continue the game');
  return conMsg ? snakeAndLadder(player1Name, player2Name) : refresh();
}

function isScoreExceeding(score) {
  if (score > 100) {
    return true;
  }

  return false;
}

function ladderUpdation(playerName, score) {
  const isladder1 = score === 4 || score === 12 || score === 14;
  const isladder2 = isladder1 || score === 22 || score === 41 || score === 54;

  if (isladder2) {
    console.log(playerName, ':HEY! you got a 🪜ladder🪜');
  }

  switch (score) {
    case 4:
      return 52;
    case 12:
      return 38;
    case 14:
      return 41;
    case 22:
      return 36;
    case 41:
      return 38;
    case 54:
      return 34;
    default:
      return 0;
  }
}

function snakeUpadation(playerName, score) {
  const isSnake1 = score === 96 || score === 94 || score === 75;
  const isSnake2 = isSnake1 || score === 48 || score === 37 || score === 28;

  if (isSnake2) {
    console.log(playerName, ':HEY! you got a 🐍snake🐍');
  }

  switch (score) {
    case 96:
      return 54;
    case 94:
      return 23;
    case 75:
      return 43;
    case 48:
      return 32;
    case 37:
      return 34;
    case 28:
      return 18;
    default:
      return 0;
  }
}

function checkWinner(player1Score, player2Score) {
  if (player1Score === 100) {
    console.log(player1Name, 'is winner...🏆');
    return true;
  }

  if (player2Score === 100) {
    console.log(player2Name, 'is winner...🏆');
    return true;;
  }

  return false;
}

function player1ScoreUpdation(player1) {
  if (player1 === 'ok') {
    return 1;
  }
  player1Score += player1;

  if (isScoreExceeding(player1Score)) {
    player1Score = player1Score - player1;
    printingExceedingMsg('player1');
  }
  player1Score += ladderUpdation(player1Name, player1Score);
  player1Score -= snakeUpadation(player1Name, player1Score);
  return '';
}

function updateScore(player2) {
  if (player2 === 'ok') {
    return 1;
  }
  player2Score += player2;

  if (isScoreExceeding(player2Score)) {
    player2Score = player2Score - player2;
    printingExceedingMsg('player2');
  }

  player2Score += ladderUpdation(player2Name, player1Score);
  player2Score -= snakeUpadation(player2Name, player2Score);

  console.log(player1Name, "'s position", player1Score);
  console.log(player2Name, "'s position", player2Score);

  if (checkWinner(player1Score, player2Score)) {
    return 0;
  }

  console.log('---------------------');
}

function snakeAndLadder(player1Name, player2Name) {

  const player1 = gettingNumberToContinueOrExit(player1Name);
  console.log(player1);

  if (player1ScoreUpdation(player1) === 1) {
    return 1;
  }

  const player2 = gettingNumberToContinueOrExit(player2Name);
  console.log(player2);

  const score = updateScore(player2);
  if (score === 1) {
    return 1;
  }

  if (score === 0) {
    return 0;
  }

  return snakeAndLadder(player1Name, player2Name)
}

function repeat() {
  const repeat1 = confirm("do you want to play again");
  const repeat2 = repeat1 ? gamestart() : 'bye';
  return repeat2;
}
function gamestart() {
  console.log('game started');
  player1Score = 0;
  player2Score = 0;

  const a = snakeAndLadder(player1Name, player2Name);
  if (a === 0) {
    console.log(repeat());
  }

  if (a === 1) {
    console.log('thanks for playing🤗 bye 👋');
  }

  return '';
}

gamestart();
