function isEven(a) {
    if (a == 0) {
        return true;
    }
    if (a == 1 || a == -1) {
        return false;
    }

    return isEven(a-2);
}

let number = 75;

console.log(isEven(number));