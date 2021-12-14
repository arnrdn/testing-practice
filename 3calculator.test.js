const Calculator = require('./3calculator');

describe('Calculator tests', () => {
  test('Add', () => {
    expect(Calculator.add(2, 2)).toEqual(4);
  });

  test('Subtract', () => {
    expect(Calculator.subtract(5, 2)).toEqual(3);
  });

  test('Divide', () => {
    expect(Calculator.divide(10, 2)).toEqual(5);
  });

  test('Divide by zero', () => {
    expect(() => Calculator.divide(10, 0)).toThrow();
  });

  test('Multiply', () => {
    expect(Calculator.multiply(5, 5)).toEqual(25);
  })
});