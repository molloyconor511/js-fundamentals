// This function should return true if the passed string is equal to "Hello"
function isHello(val1) {
  // TODO: write code in this function body to pass the tests
  if (val1 === "Hello") {
    return true;
  } else {
    return false;
  }
}

// This function should return true if the passed string is not equal to "Hello"
function isNotHello(val1) {
  // TODO: write code in this function body to pass the tests
  return val1 != "Hello" ? true : false;
}

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan(val1, val2) {
  // TODO: write code in this function body to pass the tests
  return val1.length > val2.length ? true : false;
}

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels(val1) {
  // TODO: write code in this function body to pass the tests

  val1 = val1.toLowerCase();
  let vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of val1) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  if (vowelCount % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter(val1) {
  // TODO: write code in this function body to pass the tests
  if (val1.length % 2 != 0) {
    const oddIndex = (val1.length - 1) / 2;
    const oddNumberLetters = val1.charAt(oddIndex);
    return oddNumberLetters;
  } else if (val1.length == 0) {
    return "No string available";
  } else {
    const evenIndex = (val1.length - 1) / 2;
    const evenNumberLetters = val1.charAt(evenIndex) + val1.charAt(index + 1);
    return evenNumberLetters;
  }
}

// This function should return the name of the season for the provided
// month name. For example, "January" should return "Winter". If the provided
// value is not a valid month, an empty string ("") should be returned. Use
// the below ranges for each season:
//
// Spring - March to May
// Summer - June to August
// Autumn - September to November
// Winter - December to February
function seasonForMonth(monthName) {
  // TODO: write code in this function body to pass the tests
}

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth,
};
