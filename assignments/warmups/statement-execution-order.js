// app.formative.com/join --> 3ZFTVY
// What's the output in the console after the following code segment runs?
console.log('foo')

/**
 * Set a timer
 * @param {function} callbackFunction Function to call when the timer expires
 * @param {number} timer Time in milliseconds to set timer
 */
setTimeout(doIpsum, 10)

console.log(doBar())

function doIpsum() {
  console.log('ipsum')
}

function doBar() {
  return 'bar'
}

console.log('lorem')
