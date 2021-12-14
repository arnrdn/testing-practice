const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error("String length should be between 1 to 10 chars");
  }
  return string.length;
};

module.exports = stringLength;