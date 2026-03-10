// let a = 5;
// let b = a++ + ++a;
// console.log(a)
// console.log(b)


// let a = 8;
// let b = a++ + ++a;
// console.log(a)
// console.log(b)

// A + b  === a++  + ++a
// A = a= 8 + 1  -> a =  9
///b = 10--- a= 10

//A+B = 8 + 10 = 18


// let a = 12;
// let b = a++ + ++a;
// console.log(a)
// console.log(b)

// //A = 12 -- a= 13
// //+
// //B = 14 -- a= 14


// let a = 15;
// let b = a++ + ++a;
// console.log(a)
// console.log(b)

// A = 15, a-> 15+1 = 16 a
//+
// B = 1 + 16= B=17  => a - 17

let a = 8;
let b = a++ + ++a + a++;
console.log(a)
console.log(b)
//console.log(c)

//A = 8 -> 8+1=     --> a=9
//B = 10 => B=9+1   --> a=10
//C = 10 => 10+1=11 --> a=11  