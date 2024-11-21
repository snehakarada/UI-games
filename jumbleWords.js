function checkAnswer(index, userAnswer) {
  const answers = ['books', 'pen', 'paper', 'script'];

  return userAnswer === answers[index];
}

function rightAnswer(coins) {
  console.log('\nHEY! you are right ✅ you got 5 coins');

  return coins + 5;
}

function wrongAnswer(coins) {
  console.log('\nWRONG ❌ anwer you lost 3 coins');
  return coins - 3;
}

function getClues(times, index) {
  console.log(times, index);
  const answers = ['books', 'pen', 'paper', 'script'];
  const word = answers[index];
  const char = times - 1;
  return '\nIn the word ' + times + ' letter is ' + word[char];
}

function clue(coins) {
  const confirmation = confirm('clue cost 2 coins do you want to buy');
  if (confirmation) {
    return coins - 2;
  }
  console.log('then guess the answer');
  return coins;
}

function jumbleWords() {
  console.log('ok lets start');
  let coins = 0;
  const words = ['obsok', 'enp', 'prape', 'ticprs'];
  let index = 0;
  let times = 0;

  while (index < words.length) {
    console.log(playerName, '|   coins:', coins, '🪙');
    console.log('\nguess the word ⬇️');

    const userAnswer = prompt(words[index]);
    if (userAnswer === 'clue') {
      coins = clue(coins);
      times += 1;
      console.log(getClues(times, index));
      continue;
    }
    console.clear();
    coins = checkAnswer(index, userAnswer) ? rightAnswer(coins) : wrongAnswer(coins);
    times = 0;
    index++;
  }
  console.log(playerName, '|   coins:', coins, '🪙');
  return '';
}

function gameStart() {
  console.log('\nHi!', playerName, 'welcome to jumble words\n');
  console.log('INSTRUCTIONS 👩‍🦯‍➡️ \n* for every correct✅ answer you will get 5️⃣ coins🪙 ');
  console.log('* And for every incorrect❌ answer you will loose 3️⃣ coins🪙');
  console.log('* If you want a clue you have to buy  with  2️⃣ coins🪙');
  console.log('* for clue type clue');
  const confirmation = confirm('do you want to play');
  if (confirmation) {
    console.log(jumbleWords());
  }
  console.log('thanks🤗 for coming bye');
}


const playerName = prompt('enter your name');
gameStart();
