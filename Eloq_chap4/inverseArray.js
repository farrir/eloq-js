function inverseArray(array) {
    let invArray = [];
    for (let i = (array.length-1); i >= 0; i--) {
        invArray.push(array[i]);
    }
    return invArray;
}

function inverseArrayInPlace(array) {

    // store provided array
    let givenArray = [];
    for (let entry of array) {
        givenArray.push(entry);
    }

    // clear orignal array
    while(array.length != 0) {
        array.pop();
    }

    // fill array inverse
    for (let i = (givenArray.length-1); i >= 0; i--) {
        array.push(givenArray[i]);
    }
}

function inverseArrayInPlace2(array) {
    for (let i = 0; i<=(array.length/2); i++) {
        let temp = array[i];
        array[i] = array[array.length-(i+1)];
        array[array.length-(i+1)] = temp;
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

inverseArrayInPlace2(numbers);
console.log( numbers );