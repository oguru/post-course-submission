// How do you find the duplicate number on a given integer array?

const findDup = numArr => {
    let dupArr = []
    const noDup = new Set(numArr);
    const noDupArr = [...noDup];

    numArr.forEach(num => noDupArr.indexOf(num) < 0 ? noDupArr.push(num) : false);
    return noDupArr;

}

console.log(findDup([1, 10, 2, 3, 4, 5, 6, 7, 8, 9]), []);
console.log(findDup([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10]), [9]);
console.log(findDup([1, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [10]);
console.log(findDup([1, 10, 2, 2, 2, 3, 4, 4, 5, 6, 7, 8, 9]), [2, 2, 4]);
