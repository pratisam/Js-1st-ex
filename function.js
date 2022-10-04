/**I print an array
Write an algorithm which prints everything in an array.*/
let a1 =['2','4','dog']
let a2 = ['4','5', 'y']
function display(params){
    for (i=0; i<params.length; i++) {
        console.log(params[i])
    }
    console.log("")

params.forEach(element => console.log(element))
console.log("")

}

display(a1)
display(a2)


/**var x = [ 'p0', 'p1', 'p2' ]; 
call_me(x);

function call_me(params) {
  for (i=0; i<params.length; i++) {
    alert(params[i])
  }
} */


/**II - maximum
Write an algorithm which receives an array of integers and prints its maximum.*/

let intArray = []
let intArray1 = []

for(let i=0; i<5; i++){
   intArray[i]= parseInt(Math.random()*10)
}
intArray.forEach(element => console.log(element))
for(let i=0; i<5; i++){
    intArray1[i] = intArray[i];
}
function max(maxArray){
    console.log("maxValue")
    let maxValue =  Math.max(...maxArray)
    console.log(maxValue)
    console.log((maxArray.indexOf(maxValue)),"Index of max value")



}
max(intArray)
/**III - minimum
Write an algorithm which receives an array of integers and prints its minimum.*/

/**IV - minimum position
Write an algorithm which receives an array of integers and prints the position of its minimum.*/
function mini(miniArray){
    console.log("minimumValue")
    let miniValue =  Math.min(...miniArray)
    console.log(miniValue)
    console.log((miniArray.indexOf(miniValue)),"Index of minimum value")
}
mini(intArray)

/**V - ordered array
Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not. */

let intA =[1,2,3,4]
function orderArray(a){
    let total = 0
    for(let i=0; i<a.length; i++){
        if(a[i]>a[i+1]) 
            return false;
        else total++

    }
    return (total==a.length)?  true :  false
}
console.log(orderArray(intA))