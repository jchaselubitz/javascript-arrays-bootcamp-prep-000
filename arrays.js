var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(someArray, newElement) {
  someArray.unshift(newElement)
}
addElementToBeginningOfArray(chocolateBars, mandams)
console.log(chocolateBars)

function destructivelyAddElementToBeginningOfArray(someArray, newElement) {
  someArray.unshift(newElement)
}