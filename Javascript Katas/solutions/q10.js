//10. How do you print the first non-repeated character from a string?

const printFirstNonRepeat = string => {
    let strArr = string.split("");

    for (let i = 0; i < strArr.length; i++) {
        if (strArr.indexOf(strArr[i]) === strArr.lastIndexOf(strArr[i])) {
            return strArr[i]
        };
    }
}

console.log(printFirstNonRepeat("abc"), "a");
console.log(printFirstNonRepeat("bcd"), "b");
console.log(printFirstNonRepeat("aabc"), "b");
console.log(printFirstNonRepeat("abcba"), "c");