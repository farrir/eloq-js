let size = 32;
let output = "";

let char_hash = "#";
let char_blank = " ";

let line1 = "";
let line2 = "";

for (line=0; line < size; line++) {
    if ( line % 2 == 0 ) {
        line1 = line1 + char_blank;
        line2 = line2 + char_hash;
    } else {
        line1 = line1 + char_hash;
        line2 = line2 + char_blank;
    }
}

for (i = 0; i < size; i++) {
    if ( i % 2 == 0 ) {
        output = output + line1 + "\n";
    } else {
        output = output + line2 + "\n";
    }
}

console.log(output);