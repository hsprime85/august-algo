/*
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)

  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not

    Python: dict.has_key(key)
*/

const arr1 = ["a", "a", "a"]
const expected1 = {
  a: 3,
}

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
}

const arr3 = []
const expected3 = {}

function frequencyTableBuilder(arr) {
  const stringCount = {};
  for(var i = 0; i < arr.length; i++){
    var key = arr[i]

    if(stringCount.hasOwnProperty(key)){
      stringCount[key]++;
      console.log(string(count));
    }
    else {
      stringCount[key] = 1;
      console.log(stringCount)
    }
  }
  return stringCount;
}



def dictionary_count(arr):
    new_dict = {}
    
    if arr == []:
        
        return new_dict
      
    for x in arr:
      if(x in new_dict):  
        new_dict[x] += 1
        
      else:
        new_dict[x] = 1
      
    return new_dict

arr1 = ["a", "a", "a"]
arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]

print(dictionary_count(arr1))
print(dictionary_count(arr2))

/* ******************************************************************************** */

/*
  Reverse Word Order

  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test"
// const expected1 = "test a is This"


    function reverseWordOrder(str) {
        var arr = str.split(" ");
        var s = arr[arr.length-1]
        for(var i = arr.length-2; i >= 0; i--){
          s += " " + arr[i];
        }
        return s
      }
      reverseWordOrder(str1)

