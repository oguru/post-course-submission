// 08. How do you print duplicate characters from a string?

const printDuplicates = string => {
    const stringArr = string.split("").sort();

    let duplicateChars = new Set();

    for (let i = 0; i < stringArr.length; i++) {
        stringArr[i] === stringArr[i+1] ? duplicateChars.add(stringArr[i]) : false;
    }
       return duplicateChars;
}

console.log(printDuplicates("abbc"), "b");
console.log(printDuplicates("abcdefghibjkldddkkk"), "b", "d", "k");