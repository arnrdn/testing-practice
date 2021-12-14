class Calculator {
  static add = (a, b) => a + b;

  static subtract = (a, b) => a - b;

  static divide = (a, b) => {
    if (b === 0) {
      throw new Error("Can't divide by zero");
    } else {
      return a / b;
    }
  };

  static multiply = (a, b) => a * b;
}

module.exports = Calculator;