/*
  Array: Remove Duplicates

  Given a SORTED array of integers, dedupe the array
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1]
const expected1 = [1]

const nums2 = [1, 1, 2, 2, 3, 3]
const expected2 = [1, 2, 3]

const nums3 = [1, 1, 2, 3, 3, 4]
const expected3 = [1, 2, 3, 4]

function removeDuplicates(nums) {

    var newArray = [nums[0]]
    var current_num = nums[0]

    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > current_num) {
            newArray.push(nums[i])
            current_num = nums[i]
        }
    }
    return newArray
}
console.log(removeDuplicates(nums1))
console.log(removeDuplicates(nums2))
console.log(removeDuplicates(nums3))









/* ******************************************************************************** */

/*
  Array: Mode

  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

//build a new array.
//return index value that occurs most.
//  - order doesn't matter

// find all modes if more than one
const nums1 = []
const expected1 = []

const nums2 = [1]
const expected2 = [1]

const nums3 = [5, 1, 4]
const expected3 = []

const nums4 = [5, 1, 4, 1]
const expected4 = [1]

const nums5 = [5, 1, 4, 1, 5]
const expected5 = [5, 1]

function mode(nums) {
    var newarr = []
    var hasSeen = {}
    var max = 0
    if (nums.length === 0) {
        return nums
    }
    if (nums.length == 1) {
        return nums
    }
    for (currentNum of nums) {
        if (hasSeen.hasOwnProperty(currentNum)) {
            hasSeen[currentNum]++

        }
        else {
            hasSeen[currentNum] = 1
        }
        //find the max of the dictionaries.
        //pull out keys with "max" value
        if (hasSeen[currentNum] > max) {
            max = hasSeen[currentNum]
        }
    }
    var all_same = true
    for (num in hasSeen) {
        if (max == hasSeen[num]) {
            // parseInt() - setting string to an integer in python
            newarr.push(parseInt(num))
        }
        else {
            all_same = false
        }
    }

    if (all_same == true) {
        return []
    }
    return newarr
}

console.log(mode(nums1))
console.log(mode(nums2))
console.log(mode(nums3))
console.log(mode(nums4))
console.log(mode(nums5))



