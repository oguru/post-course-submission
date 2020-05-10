// 04. How do you remove duplicates from an array in place?

const remDup = numArray => {
    numArray.sort();
    let duplIndexes = []

    for (let i = 0; i < numArray.length; i++) {
        numArray[i] === numArray[i+1] ? duplIndexes.push(i) : false;
    }

    duplIndexes.sort((a, b) => b - a).forEach(index => numArray.splice(index, 1));

    return numArray;
}

console.log(remDup([1, 2, 2, 3, 3, 5, 6, 7, 7]))