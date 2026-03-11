// While Loop

// 1️⃣ Print "Playwright" 5 times
// 2️⃣ Print numbers from 1 to 10
// 3️⃣ Print even numbers from 1 to 20
// 4️⃣ Calculate sum of first 10 natural numbers
// 5️⃣ Print the multiplication table of 7
//---------------------------------------------------------------------------------------

// 1️⃣ Print "Playwright" 5 times--------------------------------------------------------

let Playwright = 1;

while (Playwright <= 5) {

    console.log("Playwright"); /// Print string""
    Playwright++
}
///2nd ask----
let Playwright1 = 1;

while (Playwright1 <= 5) {

    console.log("Playwright1", Playwright1++);/// Print String"" + Execution no of times

}
///3nd ask----
let Playwright2 = 1;

while (Playwright2 <= 5) {

    console.log(Playwright2++);// Print Execution times value-

}

// 2️⃣ Print numbers from 1 to 10----------------------------------------------------------

let no = 1;
while (no <= 10) {
    console.log(no++);
}

// 3️⃣ Print even numbers from 1 to 20--------------------------------------------------------

let even = 2
while (even <= 20) {

    console.log(even)
    even = even + 2       //->//even+=2 - we can write this way also

}

///2nd Method - ask if method
let num = 2;

while (num <= 20) {

    if (num % 2 === 0) {
        console.log(num)
    }

    num++
}

///4️⃣ Calculate sum of first 10 natural numbers-----------------------------------------------

let sum = 0;
let i = 1;

while (i <= 10) {
    sum = sum + i;
    i++;
}
console.log(sum);

// ..................2nd another mothod.....................
// let i = 1;
// let sum = 0;

// while (i <= 10) {
//     sum += i;   // same as sum = sum + i
//     i++;
// }
// console.log(sum);

// ...............3rd Another method.........................
// let i = 10;
// let sum = 0;

// while (i > 0) {
//   sum += i;
//   i--;
// }
// console.log(sum);
//--------------------------------------------------------------------------------------------

//// 5️⃣ Print the multiplication table of 7

let m = 7
let a = 1
while (a <= 10) {

    console.log(m * a)
    a++
}