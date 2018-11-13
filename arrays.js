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
