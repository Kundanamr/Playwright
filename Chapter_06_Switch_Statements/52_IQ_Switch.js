let age = 20;
let canvote = age >= 18 ? " Yes can vote" : "No to young"
console.log(canvote);

/// Switch with Ternary Operator

let status = "active";
let msg =
    status === "active" ? "User is Active"
        : status === "inactive" ? "User is Inactive"
            : status === "banned" ? "User is banned"
                : status === "unblock" ? "User is unblock"
                    : "Unknown Status";
console.log(msg);