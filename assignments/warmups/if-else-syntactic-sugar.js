const url = 'app.formative.com'
const joinCode = 'SCGJY5'

// Rewrite the following program using syntactic sugar.

var isInNingbo
if (getUserLatitude() == 29) {
  if (getUserLongitude() == 121) {
    isInNingbo = true
  } else {
    isInNingbo = false
  }
} else {
  isInNingbo = false
}
