// 2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:

// ```js
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```

// > It may be useful to know that you can find the length of a string by writing .length after it.

function triangle(number, symbol) {
    let test = symbol;
    for (let i = 0; i < number; i++) {
        console.log(test, test.length);
        test += symbol;
    }
    return;
}
triangle(7, '#');
