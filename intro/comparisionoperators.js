/*
comparision operator evaluate to only true or false.
1. Equailty ==
2. Strict equality ===
3. Inequality !=
4. Srtict Inequality !==
-- JS --
*/

let numb1="hello"
let numb2=hello
//string===number => false
//number1==numb2 ->type conversion
let strictEqual=numb1===numb2 //Boolean
console.log('numb1=${numb1}===numb2=${numb2} Ans ${strictEqual} its type is ${typeof strictEqual}')
let nonStrictEquality=numb1==numb2
console.log('numb1=${numb1}==numb2=${numb2} Ans ${nonStrictEquality} its type is ${typeof nonStrictEquality}')

let val1="hello"
let val2="How are you"
//different types should be equal
// string is not equal number ->
let strictInequaliy=val1!==val2;
console.log('val1=${val1}!==val2=${val2} Ans ${strictInquality} its type is ${typeof strictInequality}')
// "30" not equal to 30 -> false
let Inequality=val1!=val2
console.log('val1=${val1}!=val2=${val2} Ans ${Inequality} its type is ${typeof Inequality}')

