/*
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3]
const expected1 = 6

// add params if needed for recursion
function sumArr(nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    return (nums[0] + sumArr(nums.slice(1)))
}
console.log(sumArr(nums1))



function sumArr(nums) {
    if (i === nums.length) {
        return 0
    }
    return nums[i] + sumArr(nums, i + 1)
}



/* ******************************************************************************** */

/*
  Recursive Sigma
 
  Input: integer
  Output: sum of integers from 1 to Input integer
 
*/

const num1 = 5
const expected1 = 15
// Explanation: (1+2+3+4+5)

const num2 = 2.5
const expected2 = 3
// Explanation: (1+2)

const num3 = -1
const expected3 = 0


function recursiveSigma(num) {
    var newNum = 0;
    newNum = Math.floor(num)
    if (newNum == 1) {
        return 1
    }
    return newNum + recursiveSigma(newNum - 1)
}
console.log(recursiveSigma(num1))


function recursiveSigma(num) {
    const int = parseInt(n)

    if (isNaN(int)) {
        return null
    }

    if (int < 1) {
        return 0
    }

    return int + recursiveSigma(int - 1)
}




/*
num1 = 5  ---> 1 + 2 + 3 + 4 + 5

5 + recursiveSigma(5-1) = 5 + recursiveSigma(4) = 5 + 4 + recursiveSigma(3) ...

function factorial(x) {
  // TERMINATION
  if (x < 0) return;
  // BASE
  if (x === 0) return 1;
  // RECURSION
  return x + factorial(x - 1);
}
factorial(3);
// 6
3 + 2 + 1
*/

