// 14. How do you swap two numbers without using a third variable?

const swapNums = (num1, num2) => {
    return [num2, num1];
}

console.log(swapNums(2, 10), [10, 2]);
console.log(swapNums(5, 7), [7, 5]);
