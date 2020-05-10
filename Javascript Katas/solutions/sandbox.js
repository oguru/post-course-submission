const unsortedArr = [ [ 5, 7 ], [ 4, 8 ], [ 5, 7 ], [ 6, 6 ] ]

const sortArr = unsortedArr => {
    return unsortedArr.sort((a, b) => a[0] - b[0])
}

console.log(sortArr(unsortedArr));
