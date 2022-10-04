// *******************************Condition*************************************
// // I - cinema tariffs
// In a cinema the full tariff is 10 €, the reduced one is 8 €. Write an algorithm which given a boolean indicating if the person can have a reduced tariff prints the price to pay.

// let fullTariff = 10;
// let reduceTariff = 8;
// var condition = readLine(prompt('type Femme-f enfant-e passholder-p'))
// if(condition=='f'||condition=='e'||condition=='p'){
//     console.log("you have reduced price of "+ reduceTariff)
// }
// else{
//     console.log("you have full price of", fullTariff)
// }

let x = false
if(x){
    console.log(8)
}
else console.log(10)

/**maximum
Write an algorithm which given 3 numbers finds the maximum. */

let a = 1, b =5, c=3;
let d = Math.max(a,b,c)
console.log(d)
/***Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none. */

let dice1 =5//parseInt((Math.random*10))    
let dice2 = 5//parseInt(Math.random*10)
let dice3 =  3//parseInt(Math.random*10)
if (dice1==dice2&&dice1==dice3)
    console.log("3 identical value",dice1,dice2,dice3)

else if((dice1==dice2&&dice1==dice3)||(dice2==dice3&&dice1==dice2)||(dice3==dice1&&dice3==dice2))
    console.log("2 dice identical value",dice1,dice2,dice3)

else if (dice1==dice2||dice1==dice3||dice2==dice3)
    console.log("1 identical value",dice1,dice2,dice3)
else console.log("no identical",dice1,dice2,dice3)

// day’s number
// Write an algorithm which given the number of a day returns its name.

let dayNo = 7
switch (dayNo){
    case 1 : console.log("monday");break;
    case 2 : console.log("tuesday");break;
    case 3 : console.log("wednesday");break;
    case 4 : console.log("thursday");break;
    case 5 : console.log("friday");break;
    case 6 : console.log("saturday");break;
    case 7 : console.log("sunday");break;
    default : console.log("none");

}
/**A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price. */

let pN = 30;
let charge
if (pN<11){
    charge = pN*0.12
}
else if(pN>10&&pN<21){
    charge = pN*0.12+(pN-10)*0.11
}
else charge =10*0.12+20*0.11+(pN-30)*0.10
console.log(charge, "no of copy",pN)
