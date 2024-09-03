//power of two
let inp = 15;
let k = 1;
let power;
while (k < 5) {
  power = 2 ** k;
  if (power === inp) {
    console.log("true");
    break;
  } else if (power > inp) {
    console.log("false");
    break;
  }
  k++;
}
//pattern programs (n)
let num1 = 3;
let i;

for (i = 1; i <= num1; i++) {
  console.log("1".repeat(i));
}
// patter program (n * n)
let n1 = 4;
let a, b;
for (a = 1; a <= n1; a++) {
  console.log("1 ".repeat(n1));
  console.log("");
}
