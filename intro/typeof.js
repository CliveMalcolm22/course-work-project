/*
the type of is just to tell you the variable type.
->number
->string
->boolean
->null
->undefined
*/

let numb1=947
console.log("numb1 ",numb1 ," Its types is ",typeof numb1)
let strNumb="745"
console.log("strNumb ",strNumb," Its type is ",typeof strNumb)
let myName="James"
console.log("My name is ",myName," Its type is ",typeof myName)
let isMarried=true
console.log("isMarried ",isMarried," Its type is ",typeof isMarried)
let nullVal=null//type of <null> object ->
console.log("nullVal ",nullVal," Its type is ",typeof nullVal)
let unvalue;
console.log("unValue ",unvalue," Its type is",typeof nuValue)

let number1=749
console.log("numb1 ",numb1 ,"Its type ",typeof numb1)
let strNumb="647"
console.log("strnuNumb ",strNumb ,"Its type is ",typeof strNumb)
let myName="James"
console.log('My name is ',myName,"Its type is ",typeof myName)
let isMarried=true
console.log("isMarried "," Its type is ", typeof isMarried)
let nullVal=null//type of <null> object ->
console.log("nullVal ",nullVal,"Its type is",typeof nullVal)
let unvalue;
console.log("unValue ",unValue," Its type is ",typeof nuValue)

const bonus="500"
const salary=50000

const sallaryGross=bonus+sallary; //instruction

//console.log(sallaryGross) !-> more information
console.log("Gross salary is ",sallaryGross,"its type ",typeof sallaryGross) //->more helpful
//Tax calculations
const paye=sallaryGross*0.16
console.log("For gross sallary of",sallaryGross," Pay is ",paye)
//->
const nhif=4500
console.log("Nhif deduction ",nhif)
const sha=4500
console.log("SHA is ",sha)
const totalDeductions=paye+nhif+sha
console.log("Total deduction are ",totalDeductions)
const netSallary=sallaryGross-totalDeductions
console.log("Your net sallary is ",netSallary)