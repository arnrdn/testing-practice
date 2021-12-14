const capitalize = require('./4capitalize');

describe('Calculator tests', () => {
  test('"cats" should return "Cats', () => {
    expect(capitalize('cats')).toEqual('Cats');
  });

  test('test for non-string input', () => {
    expect(() => capitalize(4)).toThrow();
  })
});