//11. How do you check if a given string is a palindrome?

const checkPalindrome = str1 => {
    const reversedStr = 
        str1.replace(/\s/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")

    
    return str1.replace(/\s/g, "").toLowerCase() === reversedStr ? true : false;
}

console.log(checkPalindrome("reverse this"), false);
console.log(checkPalindrome("dog"), false);
console.log(checkPalindrome("pop"), true);
console.log(checkPalindrome("Euston saw I was not Sue"), true);