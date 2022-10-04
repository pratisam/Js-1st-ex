console.log('Hello dear Johnson Junior, Welcome into the backend development wizarding world!')
// //I - calculate
// Write an algorithm which calculates:

// the sum of two chosen number

// the division of two chosen number

// the modulo of two inputed numbers
/**************VARIABLE */
let a = 5;
let b = 4;
let add = a+b;
let div = a/b;
console.log("addition of 5 &4" ,add,"division of 5&4" ,div);
let n1 = 8//parseInt(prompt('enter the first number'))
let n2 = 2//parseInt(prompt('enter the second number'))
let mod = n1%n2
console.log(mod)

//concatinate 2 phrases

let word1 = "Be";
let finalword = word1.concat('central')
console.log(finalword)

//III - VAT
// Write an algorithm which receives a price without VAT and returns the price with VAT with a rate of 21%.

let price = 21///parseInt(prompt('enter the price'))
let vatPrice = price+(price*0.21)
console.log("price" +price +"vatprice"+vatPrice)
/* IV - surface of a circle
Write an algorithm which receives the radius of a circle and calculate its surface.*/
let r = 12;
let surface = Math.PI* Math.pow(r,2)
console.log(parseFloat(surface).toFixed(2)  +"area"+r+'radius')
/*Write an algorithm which receives the time of day in three different numbers, the hour, the minutes and the seconds and returns the number of seconds since midnight*/
let sec = 5//parseInt(prompt('input second'))
let min = 5//parseInt(prompt('input minute'))
let hr = 5//parseInt(prompt('input hour'))
if(hr<=24||min<=60||sec<=60){
    let totalSecond = sec+min*60+hr*60*60
    console.log("total second"+totalSecond)
}
else{
    console.log("wrong input")
}

/********************************* */
