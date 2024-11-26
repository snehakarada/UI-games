function symbol(string, value, i) {

  const b = 50 + Math.sin(i) * 10;

  for (let j = 0; j <= b; j++) {
    string = string + ' ';
  }

  return string + value;
}

function wait() {
  for (let i =0; i <= 60000000; i++) {}
}

for (let i = 0; i <= 1000; i += 0.25) {
  console.log(symbol('', '⚪️', i));
  wait();
  console.log(symbol('', '🔵', -i));
}
