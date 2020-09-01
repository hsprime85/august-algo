/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6]
const searchNum1 = 4
const expected1 = false

const nums2 = [4, 5, 6, 8, 12]
const searchNum2 = 5
const expected2 = true

const nums3 = [3, 4, 6, 8, 12]
const searchNum3 = 3
const expected3 = true

// add params if needed for recursion
function binarySearch(sortedNums, searchNum, midIdx = )
if (sortedNums.length == 0) {
    return null;
}
if (sortedNums.length == 1) {
    if (arr[0] == searchNum) {
        return true;
    }
    return false;
}
let leftIdx = 0;
let rightIdx = sortNums.length - 1;
let midIdx = Math.floor((rightIdx + leftIdx) / 2)

if (sortedNums[midIdx] === searchNum) {
    return true;
}
if (searchNum < sortedNums[midIdx]) {
    return binarySearch(sortedNums, searchNum, midIdx - 1)
}
else {
    return binarySearch(sortNums, searchNum, midIdx + 1)
}
return false

console.log(binarySearch(sortedNums, searchNum))





function binarySearch(sortedNums, searchNum, leftIdx = 0, rightIdx = sortedNums.length - 1) {
    if (leftIdx > rightIdx) {
        return false
    }

    const midIdx = Math.floor((rightIdx + leftIdx) / 2)

    if (sortedNums[midIdx] === searchNum) {
        return true
    }

    if (searchNum < sortedNums[midIdx]) {
        return binarySearch(sortedNums, searchNum, 0, midIdx - 1)
    } else {
        return binarySearch(sortedNums, searchNum, midIdx + 1, rightIdx)
    }
}




// function sumArr(nums, index){
//     if(index == 0){
//         return nums[0]
//     }
//     return nums[index] + sumArr(nums, index-1)
// }
// console.log(sumArr([1,2,3], 2))

// function sumArr(nums, i=0, sum=0) {

//     if (i < nums.length){
//         sum = sum + nums[i];
//         i++;
//         return sumArr(nums, i, sum);
//     }
//     else {
//         return sum
//     }
//     }
// var mySum = sumArr(nums1);
// console.log(mySum);

// function binarySearch(sortedNums, searchNum) {

//     let leftIdx = 0
//     let rightIdx = sortedNums.length-1;

//     while(leftIdx <= rightIdx){
//         let midIdx = Math.floor((rightIdx + leftIdx) / 2)

//         if (sortNums[midIdx] === searchNum){
//             return true;
//         }
//         if (searchNum < sortedNums[midIdx]) {
//             rightIdx = midIdx -1
//         } else{
//             leftIdx = midIdx +1
//         }
//     }
//     return false
// }

/* ******************************************************************************** */

/*
Recursively reverse a string
helpful methods:

str.slice(beginIndex[, endIndex])
returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc"
const expected1 = "cba"

const str2 = ""
const expected2 = ""

function reverseStr(str) {
    console.log("*************************************")
    console.log("str: ", str)
    // base case
    if (str.length <= 1) return str
    // forward movement
    var slicedString = str.slice(0, str.length - 1)
    console.log(`slicedString: `, slicedString)

    var lastLetter = str[str.length - 1]
    return lastLetter + reverseStr(slicedString)
}

console.log(reverseStr("abc"))














