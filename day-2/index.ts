import fs from 'fs';

console.log('Advent of Code 2025 - Day 2');

let answer = 0;

fs.readFileSync('./day-2/input.txt', 'utf-8')
  .split(',')
  .forEach((line) => {
    if (!line) return;
    const inputIds = line
      .replace('\r', '')
      .split('-')
      .map((part) => parseInt(part));

    for (let i = inputIds[0]!; i <= inputIds[1]!; i++) {
      const inputInString = i.toString();
      if (inputInString.length % 2 !== 0) continue; //on odd length, continue

      const sliceIndex = Math.floor(inputInString.length / 2);
      const partOne = inputInString.slice(0, sliceIndex);
      const parttwo = inputInString.slice(sliceIndex);

      if (partOne === parttwo) {
        console.log(i);
        answer += i;
      }
    }
  });
console.log('Answer:', answer);
