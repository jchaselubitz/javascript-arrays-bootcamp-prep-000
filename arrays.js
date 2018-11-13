var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(someArray, newElement) {
  var newArray = []
  newArray.push(someArray)
  newArray.unshift(newElement)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(someArray, newElement) {
  someArray.unshift(newElement)
  return someArray
}
