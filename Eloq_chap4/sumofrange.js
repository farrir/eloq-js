/*
    returns array of all numbers in given range
    Range can be increasing and decreasing
*/
function range(start, end, step = 1) {
    let numbers = [];
    if (start < end) {
        for (let i = start; i <= end; (i=i+step)) {
            numbers.push(i);
        }
    } else {
        for (let i = start; i >= end; (i=i-step)) {
            numbers.push(i);
        }
    }
    console.log(numbers);
    return numbers;
}

/*
    calculates the sum of all numbers in the given array
*/
function sum(range) {
    let sum = 0;
    for (let entry of range) {
        sum = sum + entry;
    }
    return sum;
}

console.log( sum( range(5, -2) ) );