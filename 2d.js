// 2.d. Write a function which check if items of an array are unique?

// ```js
// const arrOne = [1, 4, 6, 2, 1];
// console.log(checkUniqueness(arrOne));
// false;
// const arrTwo = [1, 4, 6, 2, 3];
// console.log(checkUniqueness(arrTwo));
// true;
// ```
let input = [1, 4, 6, 2, 5];
function checkUniqueness(arr) {
    return arr.length === new Set(arr).size;
}
console.log(checkUniqueness(input));
