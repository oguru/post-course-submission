// 05. How do you find the largest and smallest number in an unsorted integer array?

const findLargeAndSmall = numArray => {
    const sortedArray = numArray.sort((a, b) => a - b);
    const smallest = sortedArray[0];
    const largest = sortedArray[sortedArray.length-1];

    return [sortedArray[0], sortedArray[sortedArray.length-1]];
}

console.log(findLargeAndSmall([6, 3, 7, 8, 9, 10, 77]));
