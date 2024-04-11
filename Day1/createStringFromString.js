function createStringFromString(inputString) {
  if (!inputString || inputString.length < 3 || typeof inputString != "string"){
    throw new Error("Invalid input");
  }

  const substring = inputString.substring(inputString.length - 3);

  return substring + inputString + substring;
}


module.exports = {createStringFromString}