var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

console.log(chocolateBars, 2)

function addElementToBeginningOfArray(someArray, newElement) {
  var newArray = someArray
  newArray.unshift(newElement)
  return newArray
}

/*
function destructivelyAddElementToBeginningOfArray(someArray, newElement) {
  someArray.unshift(newElement)
  return someArray
}
