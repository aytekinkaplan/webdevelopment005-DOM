// Define arithmetic operations
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
var multiply = function (a, b) { return a * b; };
var divide = function (a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
};
// Define the calculator function with specific operator type
var calculator = function (a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            throw new Error("Invalid operator");
    }
};
// Test the calculator function
try {
    console.log(calculator(1, 2, "+")); // Output: 3
    console.log(calculator(1, 2, "-")); // Output: -1
    console.log(calculator(1, 2, "*")); // Output: 2
    console.log(calculator(1, 2, "/")); // Output: 0.5
    console.log(calculator(1, 0, "/")); // Throws error: Division by zero is not allowed
}
catch (e) {
    console.error(e.message); // Handles division by zero error
}
