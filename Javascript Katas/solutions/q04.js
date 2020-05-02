// 04. How do you remove duplicates from an array in place?

const remDup = numArray => {
return [...new Set(numArray)];
}

console.log(remDup([1, 2, 2, 3, 3, 5, 6, 7, 7]));
