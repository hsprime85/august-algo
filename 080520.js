/*
  Parens Valid

    Given an str that has parenthesis in it
    return whether the parenthesis are valid
*/

// const str1 = "Y(3(p)p(3)r)s"
// const expected1 = true

// const str2 = "N(0(p)3"
// const expected2 = false
// Explanation: not every parenthesis is closed.

// const str3 = "N(0)t ) 0(k"
// const expected3 = false
// Explanation: because the underlined ")" is premature: there is nothing open for it to close.

// const str4 = "a(b))(c"
// const expected4 = false
// Explanation: same number of opens and closes but the 2nd closing closes nothing

// function parensValid(str) {
//     countA = 0;
//     countB = 0;

//   for(var i = 0; i < str.length; i++){
//       if(str[i] == "(") {
//           countA ++
//       }
//       else if(str[i] == ")"){
//           countB ++
//       }
//       else if(countA > countB){
//           return false
//       }    
//       }
//       console.log(countA)
//       console.log(countB)    
//       if (countA != countB){
//           return false
//       }
//       return true
//   }

// str1 = "Y(3(p)p(3)r)s"
// console.log(parensValid(str1))

// str2 = "N(0(p)3"
// console.log(parensValid(str2))

// str3 = "N(0)t ) 0(k"
// console.log(parensValid(str3))


function parensValidCount(str) {
  let openLessCloseCount = 0;

  for (const char of str) {
    if (char === "(") {
      openLessCloseCount++;
    } else if (char === ")") {
      if (openLessCloseCount === 0) {
        return false;
      } else openLessCloseCount--;
    }
  }
  return openLessCloseCount === 0;
}




/* ******************************************************************************** */

/*
  Braces Valid

  Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
*/

// const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"
// const expected1 = true

// const str2 = "D(i{a}l[ t]o)n{e"
// const expected2 = false

// const str3 = "A(1)s[O (n]0{t) 0}k"
// const expected3 = false

// function bracesValid(str) {
//   // code here
// }





// let isParenthesisMatching = (str) => {
//     let stack = [];
  
//     let open = {
//         "{" : "}",
//         "[" : "]",
//         "(" : ")"
//     };
  
//     let closed = {
//         "}" : true,
//         "]" : true,
//         ")" : true
//     }
  
//     for(let i = 0; i < str.length; i++){
//         let char = str[i];
  
//         if(open[char]) {
//             stack.push(char);
//         } else if (closed[char]) {
//           let opening = stack.pop()
//             if (open[opening] !== char) return false;
//         }
//     }
  
//     return stack.length === 0;
//   }
  
//   console.log(isParenthesisMatching("a(b))(c")) 


function bracesValid2(str) {
  const stack = [];
  const opens = "({[";
  const closeToOpen = { 
  	")": "(", 
  	"}": "{", 
  	"]": "[" 
  };
  for (let i = 0; i < str.length; i++) {
    if (opens.includes(str[i])) {
      stack.push(str[i]);
    } else if (str[i] in closeToOpen) {
      if (closeToOpen[str[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

