let name1 = "" ? "Has Name" : "No Name"
console.log(name1)

let name2 = "" || "Default";   // "Default" (empty string is falsy)
console.log(name2)

let name3 = 0 || "Default";  // "Default" (0 is falsy)
console.log(name3)

let name4 = true ? "" : "Default";
console.log(name4)

let name7 = undefined ?? "Default";  // "Default"
console.log(name7)
