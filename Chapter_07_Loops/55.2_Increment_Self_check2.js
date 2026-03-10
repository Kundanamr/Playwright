let a = 6;
let b = ++a + a++ + ++a + a++ + ++a;
let c = ++a + a++ + ++a + ++a + ++a + a++;
console.log(a)
console.log(b)
console.log(c)

//A = 7  ----- 7a .. (Print a = 7)
//    7 = 7+1= 8a
//8+1=9 = 9a
//    9 = 9+1= 10a
//10+1=11 = 11a .. =======> Now a =11
// ( Print B = 43 )

//12 - 11+1= 12a
//12 - 12+1=13a
//14 - 14a
//15 - 15a
//16 - 16a
//16 - 16+1 = 17a  ======> Now a = 17

//a = 17
//b = 43
//c = 85