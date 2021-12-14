const stringLength = require('./1stringLength');

describe('stringLength tests', () => {
  test('"cats" should equal to 4', () => {
    expect(stringLength('cats')).toEqual(4);
  });

  test('string is longer than 10 chars', () => {
    expect(() => stringLength('IntoTheUnknown')).toThrow();
  });

  test('empty string', () => {
    expect(() => stringLength('')).toThrow();
  });
});
