/*
  String: Rotate String

  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

const str1 = "Hello World"
const rotateAmnt1 = 0
const expected1 = "Hello World"

const str2 = "Hello World"
const rotateAmnt2 = 1
const expected2 = "dHello Worl"

const str3 = "Hello World"
const rotateAmnt3 = 2
    // const expected3 = "ldHello Wor"

const str4 = "Hello World"
const rotateAmnt4 = 4
    // const expected4 = "orldHello W"




// ---------------------------------------------------

const shiftString = (str = '', step = 0) => {
    const length = str.length;
    step = step % length;
    step = step < 0 ? length + step : step;
    if (!str || length === 1 || !step) {
        return str;
    }
    const reverseString = (str) => str.split('').reverse().join('');
    str = reverseString(str);
    const s1 = str.slice(0, step);
    const s2 = str.slice(step);
    return reverseString(s1) + reverseString(s2);
};
console.log(shiftString("Hello World!", 9))






/* ******************************************************************************** */

/*
  String: ionIs Rotate (Is Rotation)

  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD"
const strB1 = "CDAB"
const expected1 = true
    // Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD"
const strB2 = "CDBA"
const expected2 = false
    // Explanation: all same letters in 2nd string, but out of order

function isRotation(s1, s2) {
    var s = s1 + s2;
    return s.includes(s2) && s1.length == s2.length;

}
strA1 = "ABCD"
strB1 = "CDAB"
console.log(isRotation(strA1, strB1))