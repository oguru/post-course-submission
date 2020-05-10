// 05. How do you find the largest and smallest number in an unsorted integer array?

const findMinMax = numArr => [numArr.sort((a, b) => a - b)[0], numArr.sort((a, b) => a - b)[numArr.length-1]];

console.log(findMinMax([6, 3, 7, 8, 9, 10, 77]));