// Task 1: Basic Function
function square(number) {
    return number * number;
}
console.log(square(4));

// Task 2: Arrow Function
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice"));

// Task 3: Closures
function createCounter() {
    let count = 5;
    return function () {
        return count++;
    };
}
const counter = createCounter();
console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 7

