// 06. How do you find all pairs of an integer array whose sum is equal to a given number?

const findPairs = (numArray, total) => {
    let pairs = [];

    const findPairs = (num, index) => {
        for (let i = index + 1; i < numArray.length; i++) {
            if (num + numArray[i] === total) {
                pairs.push([num, numArray[i]]);
            }
        }
    }

    numArray.forEach((num, index) => findPairs(num, index))

    return pairs;
}

console.log(findPairs([1, 2, 2, 3, 3, 5, 6, 7, 7], 4));
console.log(findPairs([5, 2, 2, 4, 8, 5, 6, 7, 7], 12));
console.log(findPairs([5, 2, 2, 8, 4, 5, 6, 6, 7, 7], 12));
