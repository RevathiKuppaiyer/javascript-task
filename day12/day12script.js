//Number divisable by 3 or not
let n = 4;
let a = 6;
//if..else
if(n % 3 == 0)
{
    console.log("Divisable by 3");
}
else
{
    console.log("Not Divisable by 3");
}
//Ternary operator
(a % 3 == 0)? console.log("Divisable by 3") : console.log("Not Divisable by 3");
//sum of an integer
let sum = 0;
let i = 4567;
while(i > 0){
    sum = sum + (i % 10);
    i = Math.floor(i / 10);
}
console.log(sum);

