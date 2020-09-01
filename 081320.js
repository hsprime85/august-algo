/*
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str0 = "   hello world     "
//const expected0 = "hello world"

function trim(str) {
    var start = 0;
    var end = str.length - 1;
    var newStr = '';
    while (str[start] == ' ') {
        start++;
    }
    while (str[end] == ' ') {
        end--;
    }
    for (i = start; i <= end; i++) {
        newStr += str[i]
    }
    return newStr;
}
console.log(trim(str0))



function trim(str) {
    // determine if there is space at the beginning and end

    // track the starting index of the str
    var startingIndex = 0
    for (var i = 0; i < str.length; i++) {
        // is the character we are looking at a ' ' space?
        // console.log(str[i])
        if (str[i] !== " ") {
            startingIndex = i // 3
            break
        }
    }
    console.log(startingIndex)
    // track the ending index of the str
    var endingIndex = str.length - 1
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] !== " ") {
            endingIndex = i // 13
            break
        }
    }
    console.log(endingIndex)

    var newStr = ""
    // read the string
    for (var i = startingIndex; i <= endingIndex; i++) {
        newStr += str[i]
    }
    // build the new string with it trimmed
    console.log(newStr)
    console.log(newStr.length)
    return newStr
}
trim(str0)






/* ******************************************************************************** */

/*
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else

  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5]
//const expected1 = 6

const nums2 = [3, 5, 5]
//const expected2 = 3

const nums3 = [3, 3, 5]
//const expected3 = 5

const nums4 = [5]
//const expected4 = 5

const nums5 = []
//const expected5 = null

function firstUnique(nums) {
    console.log(nums)
    if (nums.length === 0) {
        return null
    }
    // []
    var tracker5000 = {
        // '3': 1
    }
    // we need to iterate thorough the array
    for (var i = 0; i < nums.length; i++) {
        // track if we saw the number
        var key = nums[i]
        // set a new key
        // the first time we see it
        if (key in tracker5000) {
            // if we saw this before increment the value
            tracker5000[key] += 1
        } else {
            console.log("we have a new key")
            // set the value = 1
            tracker5000[key] = 1
        }
    }

    console.log(tracker5000)

    // which number was the first unique?
    for (let i = 0; i < nums.length; i++) {
        console.log(i)
        if (tracker5000[nums[i]] === 1) {
            return nums[i]
        }
    }
    // what if there was no unique?
    console.log("there was no unique integer")
    return null
}

console.log(firstUnique([3, 6, 5, 4, 3, 4, 6, 5]))