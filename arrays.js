var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(addOn, originalArray) {
  originalArray.unshift(addOn)
  return originalArray
}

function addElementToEndOfArray(addOn, originalArray) {
  var newArray = [...originalArray, addOn]
  return newArray
}

function addElementToEndOfArray(addOn, originalArray) {
  originalArray.push(addOn)
  return originalArray
}
