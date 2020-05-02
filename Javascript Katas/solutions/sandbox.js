const reverseStr = str1 => {
    const reversedStr = 
        str1.replace(/\s/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    return reversedStr;
}

console.log(reverseStr("reverse this"));

