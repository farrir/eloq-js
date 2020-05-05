function min(a, b) {
   let result;
   if (a > b) {
       return b;
   } else {
       return a;
   }
}

let a = -2;
let b = 1;

let res = min(a,b);
console.log(res);