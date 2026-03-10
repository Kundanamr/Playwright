// let a = 5;
// let b = a++ + ++a;
// console.log(a)
// console.log(b)

// // A = 5 => 5+1 = a-->6.
// // B = 7 => 6+1 = a-->7.
// //A+B = 12 ,7 - print a = 7
// // a= 7
// // b= 12

// let c = a++ + ++a + ++a + ++a + a++;
// console.log(c)

//C = 7+1 = 8
//9 = a   = 9
//10 = a
//11 = a
// a = 10  --> a+1 = 11 + 1 = 12 <--- a


let a = 6;
let b = a++ + ++a;
let c = ++a + a++ + ++a + ++a + ++a + a++;
console.log(a)
console.log(b)
console.log(c)
//A= 6   ---> 6+1 = 7a
//B= 8  ---> a = 8

//C
// 8+1 = 9  -- 9a
// 9        -- 9+1 =10a
// 10+1= 11 -- 11a
// 11+1= 12 -- 12a
// 12+1= 13 -- 13a
// 13       -- 13+1= 14a ---> Now - a = 14

// 14
// 14
// 67