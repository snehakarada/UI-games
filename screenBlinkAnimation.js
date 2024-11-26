const width = 130;
const height = 40;

function repeat(char, length) {
  let repeatedChar = '';
  for (let index = 0; index <= length; index++) {
    repeatedChar += char;
  }
  return repeatedChar;
}

function slice(screen, startIndex, endIndex) {
  let sliceOfString = '';
  for (let index = startIndex; index <= endIndex; index++) {
    sliceOfString += screen[index];
  }
  return sliceOfString;
}

function display(screen) {
  for (let index = 0; index < width * height; index += width) {
    console.log(slice(screen, index, index + width));
  }
}

function put(x, y, char, screen) {
  const index = y * width + x;
  return slice(screen, 0, index - 1) + char + slice(screen, index + 1, width * height);
}

function updateScreen(screen) {
  const x = Math.ceil(Math.random() * width);
  const y = Math.ceil(Math.random() * height);
  const char = Math.random() > 0.6 ? '_' : '.';
  return put(x, y, char, screen)
}

function wait() {
  for(let i = 0; i<= 10000000; i++) {}
}
let screen = repeat(' ', width * height);

while (true) {
  display(screen);
  wait();
  screen = updateScreen(screen);
  wait();
  display(screen);
}
