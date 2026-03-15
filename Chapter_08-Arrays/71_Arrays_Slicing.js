// Slicing & Combining


let arr = [1, 2, 3, 4, 5];

// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0


console.log(arr.slice(1, 3)); ///[ 2, 3 ]
console.log(arr.slice(0, 3)); //[ 1, 2, 3 ]
console.log(arr.slice(2, 4)); //[ 2, 4 ]

//Don't give the end, it will automatically take from start to end.
console.log(arr.slice(2));  // =>[ 3, 4, 5 ] - Single digit -> 2 to till the end// 

console.log(arr.slice(-2)); //[ 4, 5 ]
console.log(arr.slice(-3)); //[ 3, 4, 5 ]


let arr1 = [1, 2, 3, 4, 5];

let a = [1, 2];
let b = [3, 4];

//let c = a.concat(b);
//console.log(c);  //  - [ 1, 2, 3, 4 ]

let c = a.concat(b, [5, 6]);
console.log(c);

//Spread ( modern way) - Concatenation. (...)
let d = [...a, ...b];
console.log(d);

/// Join

console.log(["pass", "fail", "skip"].join(", "));