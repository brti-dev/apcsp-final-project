/**
 * An array of objects
 */
var students = [
  {
    name: 'Emily',
    age: 17.2,
    height: 1.66,
    gpa: 4.0,
  },
  {
    name: 'Lily',
    age: 56,
    height: 1.96,
    gpa: 5556.3,
  },
]
students.length == 2
students[1]['name'] == 'Lily'
students[0]['gpa'] == 4.0

/**
 * Work with student records
 */
function record(name) {
  return {
    name: name,
    getGpa: function () {
      for (var i = 0; i < students.length; i++) {
        if (students[i]['name'] == name) {
          return students[i]['gpa']
        }
      }
    },
    getHeight: function () {
      for (var i = 0; i < students.length; i++) {
        if (students[i]['name'] == name) {
          return students[i]['height']
        }
      }
    },
  }
}
var emily = record('Emily')
emily.name == 'Emily'
emily.getGpa() == 4.0
var lily = record('Lily')
lily.height()

/**
 * A counter that includes two methods: increment and getVal
 */
function createCounter() {
  let val = 0
  return {
    increment: function () {
      val++
    },
    getVal: function () {
      return val
    },
  }
}
let counter = createCounter()
counter.increment()
counter.increment()
counter.getVal() === 2
let counter2 = createCounter()
