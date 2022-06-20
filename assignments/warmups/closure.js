/**
 * Closure function to count the number of characters in a string
 * @param {string} char A single character to count
 * @returns {function} A function that takes a string and returns the number of times the character appears in the string
 */
function countCharacters(char) {
  return function (searchString) {
    // Your code here
    // Tip: Count string length: string.length
    // Tip: Get the character at index: string[index]
  }
}

// Tests
const countB = countCharacters('B')
console.log('Count `B` in `ABC` is 1: ', countB('ABC') == 1)
const count1 = countCharacters('1')
console.log('Count `1` in `00110011ABXY` is 4', count1('00110011ABXY') == 4)
