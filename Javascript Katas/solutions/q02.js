// 02. How do you find the duplicate number on a given integer array?

const findDuplicate = numArray => {
    const sortedArray = numArray.sort((a, b) => a - b);
    let duplicateNums = [];

    for (let i = 0; i < sortedArray.length; i++) {
        sortedArray[i] === sortedArray[i+1] ? duplicateNums.push(sortedArray[i]) : false;
    }
    return duplicateNums;
}

console.log(findDuplicate([1, 10, 2, 3, 4, 5, 6, 7, 8, 9]), []);
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10]), [9]);
console.log(findDuplicate([1, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [10]);
console.log(findDuplicate([1, 10, 2, 2, 2, 3, 4, 4, 5, 6, 7, 8, 9]), [2, 2, 4]);
