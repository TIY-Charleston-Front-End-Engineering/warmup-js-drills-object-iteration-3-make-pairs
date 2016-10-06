// ---------------------------------------
// EXERCISE : makePairs()
//  (take an object and change it into an arrays of  has key-value pair arrays )
// ---------------------------------------
// Write a makePairs `` function that takes an object and returns an array that contains
// a series of 2-element arrays with property names as the first element
// and the value as the second element from the input object.

var makePairs = function(obj){

}


var userObject = {
   username: "shamgod@mail.com",
   password: 'baby shampoo',
   accountCreated: "08-29-2015",
   isAdult: false,
   warningLevel: 4
}

//EXAMPLE:
// ----------------------------------
// makePairs({product: "Steak Knives", price: 19.99, vendor: "Billy Mays", onSale: false})
// => [
//      ['product', 'Steak Knives'],
//      ['price', 19.99],
//      ['vendor', 'Billy Mays'],
//      ['onSale', false]
// ]


var coolPairs = makePairs(userObject)

// helper function to search for values
var _search = function(arr, val, srchIndx){ for (var i = 0; i < arr.length; i += 1){ if(arr[i][srchIndx]=== val) {return true} } return false }

//Searches for the presence of values in at a given index in the pairs array:
console.assert( _search(coolPairs, 'username', 0) === true   )
console.assert( _search(coolPairs, 'username', 1) === false   )

console.assert( _search(coolPairs, 'baby shampoo', 0) === false   )
console.assert( _search(coolPairs, 'baby shampoo', 1) === true   )

console.assert( _search(coolPairs, 'shamgod@mail.com', 1) === true   )
console.assert( _search(coolPairs, 'warningLevel', 0) === true   )
