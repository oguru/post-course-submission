// 16. How do you check if a string contains only digits?

const checkInt = input => {
    return Number.isInteger(input) === true;
}

console.log(checkInt("wegd"));
console.log(checkInt("w12"));
console.log(checkInt(12));