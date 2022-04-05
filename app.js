// add
const add = (a, b) => typeof a == 'string' | typeof b == 'string' ? 0 : a + b;
// minus
const subtract = (a, b) => typeof a == 'string' | typeof b == 'string' ? 0 : a - b;
// multiply
const multiply = (a, b) => typeof a !== 'number' | typeof b !== 'number' ? 0 : a * b;
// divide
const divide = (a, b) => typeof a !== 'number' | typeof b !== 'number' ? 0 : a / b;
// modulus
const modulus = (a, b) => typeof a !== 'number' | typeof b !== 'number' ? 0 : a % b;


module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulus,
}