function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error("This is not a string!");
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;