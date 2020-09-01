/*
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Is there a quick way to determine if they aren't an anagram before spending more time?

  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes"
const strB1 = "eys"
const expected1 = true

const strA2 = "yes"
const strB2 = "eYs"
const expected2 = true

const strA3 = "no"
const strB3 = "noo"
const expected3 = false

const strA4 = "silent"
const strB4 = "listen"
const expected4 = true

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }

  // convert the letters to letter
  var s1Lowered = s1.toLowerCase()
  var s2Lowered = s2.toLowerCase()

  // we need an object that represents how many times we saw each character
  var my_object1 = {
    // s: 1,
    // i: 1,
    // l: 1,
    // e: 1,
    // n: 1,
    // t: 1,
  }

  // we need an object that represents how many times we saw each character
  var my_object2 = {
    // l: 1,
    // i: 1,
    // s: 1,
    // t: 1,
    // e: 1,
    // n: 1,
  }

  // build the frequency table for the first string
  for (character of s1Lowered) {
    console.log(character)

    // is this the first time we saw this character?
    // if (my_object1.hasOwnProperty(character)) {
    if (character in my_object1) {
      // if this is true
      my_object1[character] += 1
    } else {
      // if false
      // we haven't added this key in the object yet
      my_object1[character] = 1
    }
  }

  console.log(my_object1)

  // build the frequency table for the second string
  for (character of s2Lowered) {
    console.log(character)

    // is this the first time we saw this character?
    // if (my_object2.hasOwnProperty(character)) {
    if (character in my_object2) {
      // if this is true
      my_object2[character] += 1
    } else {
      // if false
      // we haven't added this key in the object yet
      my_object2[character] = 1
    }
  }

  console.log(my_object2)

  // console.log(my_object1["s"] == my_object2["s"])
  // console.log(1 == 1)
  for (character in my_object1) {
    console.log(character)
    if (my_object1[character] !== my_object2[character]) {
      return false
    }
  }

  return true
}

console.log(isAnagram(strA4, strB4))

/* ******************************************************************************** */

/*
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionarys to represent current inventory,
  update the quantities of the current inventory

  if the item doesn't exist in current inventory, add it to the inventory

  return the current inventory after updating it.
*/

const newInv5 = [
  { name: "Grain of Rice", quantity: 9000 },
  { name: "Peanut Butter", quantity: 50 },
  { name: "Royal Jelly", quantity: 20 },
]
const currInv5 = [
  { name: "Peanut Butter", quantity: 20 },
  { name: "Grain of Rice", quantity: 1 },
]
const expected5 = [
  { name: "Peanut Butter", quantity: 70 },
  { name: "Grain of Rice", quantity: 9001 },
  { name: "Royal Jelly", quantity: 20 },
]

const newInv6 = []
const currInv6 = [{ name: "Peanut Butter", quantity: 20 }]
const expected6 = [{ name: "Peanut Butter", quantity: 20 }]

const newInv7 = [{ name: "Peanut Butter", quantity: 20 }]
const currInv7 = []
const expected7 = [{ name: "Peanut Butter", quantity: 20 }]


function updateInventory(newInv, currInv) {
  console.log("newInv: ", newInv)
  console.log("currInv: ", currInv)

  var newCurrInv = {
    // 'Peanut Butter': 70,
    // 'Grain of Rice': 9001,
    // "Royal Jelly": 20
  }

  for (itemObj of currInv) {
    console.log(itemObj)
    var key = itemObj.name
    var value = itemObj.quantity
    console.log("key: ", key)
    console.log("value: ", value)
    newCurrInv[key] = value
  }

  console.log("newCurrInv: ", newCurrInv)

  for (itemObj of newInv) {
    console.log(itemObj)
    var key = itemObj.name
    var value = itemObj.quantity
    console.log("key: ", key)
    console.log("value: ", value)
    // if the key is already there
    if (key in newCurrInv) {
      // we just add it together
      // newCurrInv[itemObj.name] += itemObj.quantity
      newCurrInv[key] += value
    } else {
      // set a new key and value
      newCurrInv[key] = value
    }
  }
  console.log("newCurrInv: ", newCurrInv)
  var arrayToReturn = []

  for (key in newCurrInv) {
    console.log(key)
    var value = newCurrInv[key]

    var objToPush = {
      name: key,
      quantity: value,
    }

    arrayToReturn.push(objToPush)
  }

  console.log(arrayToReturn)
  return arrayToReturn
}
// [
//   { name: "Peanut Butter", quantity: 70 },
//   { name: "Grain of Rice", quantity: 9001 },
//   { name: "Royal Jelly", quantity: 20 },
// ]
updateInventory(newInv5, currInv5)