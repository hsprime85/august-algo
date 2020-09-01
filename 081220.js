/*
  Given an arr and a separator string, output a string of every item in the array separated by the separator.

  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3]
const separator1 = ", "
const expected1 = "1, 2, 3"

const arr2 = [1, 2, 3]
const separator2 = "-"
const expected2 = "1-2-3"

const arr3 = [1, 2, 3]
const separator3 = " - "
const expected3 = "1 - 2 - 3"

const arr4 = [1]
const separator4 = ", "
const expected4 = "1"

const arr5 = []
const separator5 = ", "
const expected5 = ""


function join(arr, separator) {
    var newStr = ""
    newStr = arr.join(separator)

    return newStr
}
var arr1 = [1, 2, 3]
var separator1 = ", "
var arr2 = [1, 2, 3]
var separator2 = "-"

console.log(join(arr1, separator1))
console.log(join(arr2, separator2))



function join(arr, separator) {
    var newStr = ""
    if (arr.length == 0) {
        return newStr
    }
    for (var i = 0; i < arr.length - 1; i++) {
        newStr += arr[i] + separator
        console.log(arr[i])
    }
    newStr += arr[arr.length - 1]

    return newStr
}
const arr1 = [1, 2, 3]
const separator1 = ", "
const arr3 = [1, 2, 3]
const separator3 = " - "
const arr4 = [1]
const separator4 = ", "
const arr5 = []
const separator5 = ", "
console.log(join(arr3, separator3))
console.log(join(arr4, separator4))
console.log(join(arr5, separator5))


/* ******************************************************************************** */

/*
  Book Index

  Given an arry of ints representing page numbers
  return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums6 = [1, 13, 14, 15, 37, 38, 70]
const expected6 = "1, 13-15, 37-38, 70"

const nums7 = [1, 2, 3, 15, 55, 56, 57, 70]
const expected7 = "1-3, 15, 55-57, 70"

const nums6 = [1, 13, 14, 15, 37, 38, 70]
const expected6 = "1, 13-15, 37-38, 70"

const nums7 = [1, 2, 3, 15, 55, 56, 57, 70]
const expected7 = "1-3, 15, 55-57, 70"


function bookIndex(arr) {
    var myStr = "";
    var firstnum = arr[0];
    var lastnum;
    for (var i = 0; i < arr.length; i++) {
        // if it is not consecutive, (top end of range becomes current index)
        if (!(arr[i] + 1 == arr[i + 1])) {
            lastnum = arr[i];
            // This if statement is for checking for last element (don't add ", " at the end)
            if (i == arr.length - 1) {
                // Checks for cases where "-" is not needed. i.e. [5,10,12] -> logs "5, 10, 12"
                if (firstnum == lastnum) {
                    myStr += firstnum;
                }
                // Else, "-" added to consecutive set of numbers
                else {
                    myStr += firstnum + "-" + lastnum;
                    firstnum = arr[i + 1];
                }
            }
            // separates the strings, rather than first index/last index.
            else {
                // Checks if the index is single, non-consecutive.
                if (firstnum == lastnum) {
                    myStr += firstnum + ", "
                    firstnum = arr[i + 1];
                }
                // Else, "-" added to consecutive set of numbers
                else {
                    myStr += firstnum + "-" + lastnum + ", ";
                    firstnum = arr[i + 1];
                }
            }

        }
    }
    return myStr
}

console.log(bookIndex(nums6));
console.log(bookIndex(nums7));