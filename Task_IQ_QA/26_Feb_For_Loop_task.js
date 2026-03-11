// For Loop

// 1️⃣ Print "Hello" 5 times
// 2️⃣ Print numbers from 1 to 10
// 3️⃣ Print even numbers from 1 to 20
// 4️⃣ Print the sum of first 10 natural numbers
// 5️⃣ Print the multiplication table of 5
//---------------------------------------------------------------------------------

//1️⃣ Print "Hello" 5 times-------------------------------------------------------------

for (hello = 0; hello < 5; hello++) {
    console.log("hello");
}

///2️⃣Print numbers from 1 to 10--------------------------------------------------------------

for (let no = 1; no < 11; no++) {
    console.log(no);
}

//3️⃣ Print even numbers from 1 to 20--------------------------------------------------------------

for (let even = 1; even <= 20; even++) {
    if (even % 2 === 0) {
        console.log(even)
    }
    else { console.log("even") }/// no use
}
////2nd ways
for (let even = 2; even <= 20; even += 2) {
    console.log(even);
}

// 4️⃣ Print the sum of first 10 natural numbers----------------------------------------------

let sum = 0;

for (i = 0; i <= 10; i++) {
    sum = i + sum;
    console.log("Sum: ", sum)
}

//5️⃣Print the multiplication table of 5----------------------------------------------------

let m = 5;

for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}