// 06. How do you find all pairs of an integer array whose sum is equal to a given number?

const findPaired = (numArr, givenNum) => {
    let pairs = [];

    numArr.forEach((num, index) => {
        for (let i = 0; i < numArr.length; i++) {
            if (index !== i) {
                numArr[i] + num === givenNum ? pairs.push([numArr[i], num]) : false;
            } 
        }
    })
    pairs.map(pair => pair.sort((a, b) => a - b));
    // pairs.forEach((pair, index) => console.log(pair, index));
    pairs.sort((a, b) => a[0] - b[0]);
    // console.log(pairs);
    

    // console.log(pairs[0][0])
    return pairs.filter((pair, index) => {

            if (pairs[index+1] === undefined) {
                return true
            } else if (pair[0] === pairs[index+1][0] && pair[1] === pairs[index+1][1]) {
                return false;
        }
        return true;
})
}
// findPaired([5, 2, 2, 8, 4, 5, 6, 6, 7, 7], 12)
console.log(findPaired([1, 2, 2, 3, 3, 5, 6, 7, 7], 4));
console.log(findPaired([5, 2, 2, 4, 8, 5, 6, 7, 7], 12));
console.log(findPaired([5, 2, 2, 8, 4, 5, 6, 6, 7, 7], 12));