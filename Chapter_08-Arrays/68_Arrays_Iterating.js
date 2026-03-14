///Iterate - Go from one to another.// triverse

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("-------");

///for...of (cleanest for value)

for (let test of tests) {
    console.log(test);
}

//forEach ( no returs value) print index also

tests.forEach((test, index) => {

    console.log(`${index}:${test}`); // index +value = print
})

////entries() - index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test)
}

///In operators

let students = ["kundan", "preeti", "atul", "rajkumar"];
for (let student in students) {
    console.log(student, students[student]);

}