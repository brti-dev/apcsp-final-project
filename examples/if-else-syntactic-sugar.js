function getUserName() {
  // Some fetching logic here
  return 'Lizzy'
}

var age
if (getUserName() == 'Mary') {
  age = 17
} else {
  age = 'unknown'
}

// The above 5 lines can be rewritten as syntactic sugar:

var ageSugar = getUserName() == 'Mary' ? 17 : 'unknown'
