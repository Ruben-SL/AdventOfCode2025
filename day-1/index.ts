import fs from 'fs';

console.log('Hello, Advent of Code 2025!');
const startingRotation = 50;
let currentRotation = startingRotation;
let passwordpartA = 0;
let passwordpartB = 0;

fs.readFileSync('./day-1/input.txt', 'utf-8')
  .split('\n')
  .forEach((line) => {
    if (!line) return;
    const direction = line.charAt(0);
    const rotation = parseInt(line.substring(1));

    // console.log(`Direction: ${direction}, Rotation: ${rotation} current: ${currentRotation}`);
    for (let i = 0; i < rotation; i++) {
      currentRotation += direction === 'R' ? 1 : -1;
      if (currentRotation === 100) {
        currentRotation += -100;
      }
      if (currentRotation < 0) {
        currentRotation += 100;
      }
      if (currentRotation === 0) {
        passwordpartB += 1;
      }
    }
    if (currentRotation === 0) {
      passwordpartA += 1;
    }
  });

console.log(`passwordpartA: ${passwordpartA}`);
console.log(`passwordpartB: ${passwordpartB}`);
