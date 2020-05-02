// 12. How can a given string be reversed using recursion?

const reverseString = string => {
    const splitString = string.split("")

    let reversedString = []

    for (let i = splitString.length - 1; i >= 0; i--) {
        reversedString.push(splitString[i]);
    }
    return reversedString.join("");
}

console.log(reverseString("dog"), "god");
console.log(reverseString("Howdy"), "ydwoH");
console.log(reverseString("Greetings from Earth"), "htraE morf sgniteerG");
