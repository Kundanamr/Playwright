/// Searching

let results = ["pass", "fail", "pass", "error", "fail"];

///indexOf  - Returs first index,  or -1 if not found

console.log(results.indexOf("fail"));  ///   1
console.log(results.indexOf("skip"));  ///  -1
console.log(results.indexOf("pass"));  ///  

///--------------------------------------------------------------------
// include - returns boolen...........

console.log(results.includes("pass"));  /// true
console.log(results.includes("error"));  /// true
console.log(results.includes("skip"));  /// false

///find  - returns first matching  elements.

let nums = [10, 25, 30, 45];

console.log(nums.find(x => x > 20)); // 25,30,45 =>  25  <-answer

// findIndex
console.log(nums.findIndex(n => n > 20));   /// 25 index is => 1

console.log(nums.findLastIndex(n => n > 20)); //  Last is 45 so the Index is = 3 <-Ans
console.log(nums.findLast(n => n > 20));  ///last is 45 
