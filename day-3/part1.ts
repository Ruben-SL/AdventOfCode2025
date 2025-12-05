import fs from 'fs';

console.log('Advent of Code 2025 - Day 3 - Part 1');
let answer = 0;

fs.readFileSync('./day-3/input.txt', 'utf-8')
  .split('\n')
  .forEach((line) => {
    if (!line) return;

    const LineInNumberArray = [...line.trim()].map((char) => parseInt(char));
    console.log(LineInNumberArray);
    const lastNumberInArray = LineInNumberArray.pop();
    console.log(lastNumberInArray);
    const highestNumberMinusLast = Math.max(...LineInNumberArray);

    //re add number
    LineInNumberArray.push(lastNumberInArray!);

    //split on found highest number
    const secondPartToCheck = LineInNumberArray.slice(LineInNumberArray.indexOf(highestNumberMinusLast) + 1);
    // console.log(secondPartToCheck);
    const highestNumberSecondPart = Math.max(...secondPartToCheck);
    // console.log(highestNumberSecondPart);

    const answerInString = highestNumberMinusLast.toString() + highestNumberSecondPart.toString();
    // console.log(answerInString);

    answer += parseInt(answerInString);
    // answer += LineInNumberArray[1]!;
  });

console.log('answer', answer);
