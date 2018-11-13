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

function addElementToEndOfArray(someArray, newElement) {
  var newArray = []
  newArray.push(someArray)
  newArray.push(newElement)
  return newArray
}

function destructivelyAddElementToEndOfArray(someArray, newElement) {
  someArray.push(newElement)
  return someArray
}

function accessElementInArray(someArray,index){
  return someArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray (someArray) {
  return someArray.shift()
}

function removeElementFromBeginningOfArray(someArray) {
  var newNewArray = []
  newNewArray = someArray.slice(1)
  return newNewArray
}

function destructivelyRemoveElementFromEndOfArray(someArray) {
  return someArray.pop()
}

function removeElementFromEndOfArray(someArray) {
  var new2Array = []
  new2Array = someArray.slice(0, someArray.length - 1)
  return new2Array
}
