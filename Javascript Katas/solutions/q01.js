
//sort in order
//compare index 0 to 1
//if index 1 - index 0  
//array.filter()
//



function missingNumberInSequence(numberArray) {
    const sortedArray = numberArray.sort((a, b) => a - b);
    const firstNum = sortedArray[0];
    const lastNum = sortedArray[sortedArray.length-1];

    let result = [];

    for (let i = firstNum; i < lastNum-1; i++) {
        
        if (sortedArray.indexOf(i) === -1) {
            result.push(i);
        }
    }

    return result;
}

console.log(missingNumberInSequence([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(missingNumberInSequence([1, 2, 4, 5, 6, 7, 8, 9]));
console.log(missingNumberInSequence([1, 2, 3, 4, 5, 6, 8, 9]));
console.log(missingNumberInSequence([-1, -2, -4]));
