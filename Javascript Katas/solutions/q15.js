//15. How do you find all permutations of a string?

// let allPermutations = text => {
//     let results = [];

//     if (text.length === 1) {
//       results.push(text);
//       return results;
//     }

//     text.split("")
//       .forEach((firstChar, index) => {
//         const charsLeft = text.substring(0, index) + text.substring(index + 1);
//         allPermutations(charsLeft)
//           .forEach((permutation) => {
//             results.push(firstChar + permutation);
//           });
//       });

//     return results;
// };

// ????????? Doesn't make sense

console.log(allPermutations("This"));
