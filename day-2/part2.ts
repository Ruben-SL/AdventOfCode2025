import fs from 'fs';

console.log('Advent of Code 2025 - Day 2');

let answer = 0;
let invalidIds = new Set<string>();

fs.readFileSync('./day-2/input.txt', 'utf-8')
  .split(',')
  .forEach((line) => {
    if (!line) return;
    const inputIds = line
      .replace('\r', '')
      .split('-')
      .map((part) => parseInt(part));

    for (let id = inputIds[0]!; id <= inputIds[1]!; id++) {
      const idString = id.toString();
      for (let i = 0; i < idString.length; i++) {
        if (idString.length % i === 0) {
          const count = idString.length / i;
          const segmentToCheck = idString.slice(0, i);
          // console.log('i:', i, idString, 'count=', count, 'segment=', segmentToCheck);

          let InvalidId = true;
          for (let j = 1; j < count; j++) {
            const nextSegment = idString.slice(j * i, j * i + i);
            if (nextSegment !== segmentToCheck) {
              InvalidId = false;
              break;
            }
          }
          if (InvalidId) {
            console.log('Invalid ID found:', idString);
            invalidIds.add(idString);
          }
        }
      }
    }
  });

invalidIds.forEach((x) => (answer += parseInt(x)));
console.log('Answer:', answer);
