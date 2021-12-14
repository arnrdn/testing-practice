function stringLength(string) {
  if (string.length > 1 || string.length < 10) {
    return string.length;
  } else {
    throw new Error('Length should be between 1 and 10 characters');
  }
}

module.exports = stringLength;