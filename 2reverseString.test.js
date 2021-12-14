const reverseString = require('./2reverseString');

test('cats equals to stac', () => {
  // Arrange
  const string = 'cats';

  // Act
  let newString = reverseString(string);

  expect(newString).toEqual('stac');
})