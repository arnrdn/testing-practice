const stringLength = require('./stringLength');

test('legth of "cats" equals 4', () => {
  expect(stringLength('cats')).toBe(4);
});