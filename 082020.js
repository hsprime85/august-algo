/*
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

// const cents1 = 25
// const expected1 = { quarter: 1 }

// const cents2 = 50
// const expected2 = { quarter: 2 }

// const cents3 = 9
// const expected3 = { nickel: 1, penny: 4 }

// const cents4 = 99
// const expected4 = { quarter: 3, dime: 2, penny: 4 }   
// 99/25=3.96   3 quarters  99-25*3=24  24/10=2.5  2dimes 24-10*2=4

// <0; 0<X<5; 5<X<10; 10<X<25;X>25

function fewestCoinChange(cents) {
    if (cents < 0) {
        return null
    }

    var coins = {}

    if (cents > 0) {
        var quarters = Math.floor(cents / 25);
        if (quarters > 0) {
            coins['quarter'] = quarters;
        }
        cents = cents % 25;
        var dimes = Math.floor(cents / 10);
        if (dimes > 0) {
            coins['dime'] = dimes
        }
        cents = cents % 10;
        var nickels = Math.floor(cents / 5);
        if (nickels > 0) {
            coins['nickel'] = nickels;
        }
        cents = cents % 5;
        var pennies = Math.floor(cents / 1);
        if (pennies > 0) {
            coins['penny'] = pennies;
        }
    }
    return coins;

}
console.log(fewestCoinChange(99))


// quarter, nickel, dime, penny
// need a dictionary

/* ******************************************************************************** */

/*
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

// const nums1 = [3, 0, 1];
// const expected1 = 2;

// const nums2 = [3, 0, 1, 2];
// const expected2 = null;
// Explanation: nothing is missing

/*
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0.
*/

// const nums3 = [2, -4, 0, -3, -2, 1];
// const expected3 = -1;

// const nums4 = [5, 2, 7, 8, 4, 9, 3];
// const expected4 = 6;

function missingValue(nums) { }