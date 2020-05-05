function countChar(text, c) {
    let count = 0;
    for (i=0; i < text.length; i++) {
        if (text[i] == c) {
            count++;
        }
    }
    return count;
}

function countBs(text) {
    return countChar(text, "B");
}

let str = "Verbose is the best mode of all time, says Bob.";

let number = countBs(str);

console.log(number);