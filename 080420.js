/*
  String: Reverse
  Implement reverseString(str)
  Input: 'abc'
  Output: 'cba'
*/

function reverseString(str) {
    // code here
    var revStr = ""
    //str[2]
    //    start              stop  increment
    for (var i = str.length - 1; i >= 0; i--) {
      revStr = revStr + str[i]
    }
    return revStr
  }
  //          0 1 2
  var myStr = "abc"
  console.log(reverseString(myStr))

/*
  Acronyms
  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).
  Do it with .split first if you need to, then try to do it without
*/

function stringAcronym(str) {
    var arr = str.split(" ")
    console.log(arr) // ['Algo', 'in', 'the', 'morning']
  
    var acronym = ""
    for (var i = 0; i < arr.length; i++) {
      var first_letter = arr[i][0] //.toUpperCase()
      acronym = acronym + first_letter
    }
    return acronym
  }
  
  var string = "Algo in the morning"
  console.log(stringAcronym(string))







  /*
  Case insensitive string comparison
  const test1StrA = "ABC"
  const test1StrB = "abc"
  caseInsensitiveCompare(test1StrA, test1StrB) // Output: true
*/

function caseInsensitiveCompare(stringA, stringB) {
    if (stringA.length != stringB.length) {
      return false
    }
    stringA = stringA.toLowerCase()
    stringB = stringB.toLowerCase()
    return stringA == stringB
  }
  
  console.log(caseInsensitiveCompare("WILL THIS WORK", "will this work"))