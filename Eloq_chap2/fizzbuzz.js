/*
- print numbers from 1 to 100
- every number div by 3         -> print Fizz
- every number div by 5         -> print Buzz
- every number div by 3 && 5    -> print FizzBuzz
*/

for (i=1; i<101; i++) {
    let output = "";

    let divBy3 = i % 3;
    let divBy5 = i % 5;

    if (divBy3 == 0) {
        output = "Fizz";
    } 
    if (divBy5 == 0) {
        output = output + "Buzz";
    }
    if (divBy3 != 0 && divBy5 != 0) {
        output = i;
    }
    console.log(output);
}