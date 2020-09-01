/*
  Given a string,
  return a new string with the duplicates excluded

  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC"
const expected1 = "abcABC"

const str2 = "helloo"
const expected2 = "helo"

function stringDedupe(str) {
  // array
  // object
  var hasSeen = {
    // h: true,
  }
  var newStr = ""
  // loop through the string
  for (var i = 0; i < str.length; i++) {
    var character = str[i]
    console.log(character)
    // have we seen this character before?
    // string includes
    // has ownProperty
    console.log(hasSeen.hasOwnProperty(character))
    if (hasSeen.hasOwnProperty(character)) {
      // nothing
    } else {
      // we haven't seen it before
      // add it to our object
      hasSeen[character] = true
      // add it to the newStr
      newStr += character
    }
  }
  console.log(newStr)
  return newStr
}

stringDedupe(str2)
/* ******************************************************************************** */

/*
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello"
// const expected1 = "olleh"

const str2 = "hello world"
// const expected2 = "olleh dlrow"

const str3 = "abc def ghi"
// const expected3 = "cba fed ihg"

function reverseWords(str) {
  console.log(str)
  // newStr
  var newStr = ""
  var strArray = str.split(" ")
  console.log(strArray)
  // loop over the string
  for (var i = 0; i < strArray.length; i++) {
    console.log("***********************")
    console.log("Start of Outter loop!")
    var word = strArray[i]
    console.log("word: ", word)
    for (var j = word.length - 1; j >= 0; j--) {
      console.log("***********************")
      console.log("Start of Inner loop!")
      // console.log(strArray[i][j])
      console.log(word[j])
      newStr += word[j]
    }
    newStr += " "
    // TODO
    // make sure the space character isn't at the end of the string
  }
  console.log(newStr)
  return newStr
}

reverseWords(str3)