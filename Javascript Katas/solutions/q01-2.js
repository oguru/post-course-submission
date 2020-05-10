// 01 How do you find the missing numbers in a given integer array?

const findMissing = numArr => {
    let missingNums = []
    const sortedArray = numArr.sort((a, b) => a - b);

    for (let i = 0; i < sortedArray.length - 1; i++) {
        sortedArray[i] + 1 === sortedArray[i+1] ? true : missingNums.push(sortedArray[i]+1)
    }
    return missingNums;
}

console.log(findMissing([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(findMissing([1, 2, 4, 5, 6, 7, 8, 9]));
console.log(findMissing([1, 2, 3, 4, 5, 6, 8, 9]));
console.log(findMissing([-1, -2, -4]));