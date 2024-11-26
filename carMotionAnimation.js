
function dashes() {
  let dashesStr = '';
  for (let i = 0; i <= 90; i++) {
    dashesStr += '-';
  }
  return dashesStr;
}

const b = dashes();

function move(a, iterate) {
  for (let i = 0; i < b.length; i++) {
    if (i === iterate) {
      a = a + 'ō͡≡o˞̶';
    }
    if (i % 5 === 0) {
      a = a + '-';
    }
    a = a + ' ';
  }
  return a;
}

function wait() {
  for (let i = 0; i < 200000000; i++) { }
}

function forward() {
  for (let index = 0; index <= 90; index++) {
    console.clear()
    console.log('\n',  nature);
    console.log(b);
    console.log(move('', index));
    console.log(b);
    console.log(nature);
    wait();
  }
}

const str = '/|\n' + '/|\n' + '/|\n'

const nature = '.-. _______|\n|=|/     /  |\n| |_____|_""_|\n|_|_[X]_|____|';

forward();
