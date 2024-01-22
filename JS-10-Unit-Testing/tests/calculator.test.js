const calculator = require('../modules/calculator');

//Primer test

test('La suma de dos números y el valor resultante', () => {
    expect(calculator.sum(10, 20)).toBe(30);
});

test('La multiplicación de dos números y el valor resultante', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
});
