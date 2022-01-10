// 2c. Reversing an array: Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write a function, reverseArray. The reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. Without reverse method.

// ```js
// console.log(reverseArray(['A', 'B', 'C']));
// ['C', 'B', 'A'];
// ```

function reverseArray(arr) {
    let newArr = arr;
    for (let i = 0; i < arr.length / 2; i++) {
        [newArr[i], newArr[arr.length - i - 1]] = [
            newArr[arr.length - i - 1],
            newArr[i],
        ];
    }
    return arr;
}
console.log(reverseArray(['A', 'B', 'C', 'd', 'e']));
