const capitalize = require('./4capitalize');

test('"cats" should return "Cats', () => {
  expect(capitalize('cats')).toEqual('Cats');
});