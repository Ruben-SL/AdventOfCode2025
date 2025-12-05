import fs from 'fs';

console.log('Advent of Code 2025 - Day 3 - Part 1');
let answer = 0;

fs.readFileSync('./day-3/input.txt', 'utf-8')
  .split('\n')
  .forEach((line) => {
    if (!line) return;

    const LineInNumberArray = [...line.trim()].map((char) => parseInt(char));

    let resultForLine = '';
    let indexToStartFrom = 0;

    //Basicly, for each position in the 12 digit number, find the highest number from the remaining numbers
    for (let i = 11; i >= 0; i--) {
      const remainingArrayToCheck = LineInNumberArray.slice(indexToStartFrom, LineInNumberArray.length - i);
      const highestNumber = Math.max(...remainingArrayToCheck);

      resultForLine += highestNumber.toString();
      indexToStartFrom = LineInNumberArray.indexOf(highestNumber, indexToStartFrom) + 1;
    }
    answer += parseInt(resultForLine);
  });

console.log('answer', answer);
