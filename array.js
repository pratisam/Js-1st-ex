/**I print an array
Write an algorithm which prints everything in an array.*/

let a = ['1',"dog",'4', "string"]
for( let i=0; i< a.length; i++){
    console.log(a[i])
}
a.forEach(element => console.log(element))



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

let maxValue = Math.max(...intArray)
console.log(maxValue)
// forEach(function(element, index, array))
console.log(intArray.indexOf(maxValue))



/**III - minimum
Write an algorithm which receives an array of integers and prints its minimum.*/
let miniValue = (Math.min(...intArray))
console.log(miniValue)

/**IV - minimum position
Write an algorithm which receives an array of integers and prints the position of its minimum.*/
console.log(intArray.indexOf(miniValue))

/**V - ordered array
Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not. */

intArray.sort(function(a, b){return b-a})
intArray.forEach(element => console.log(element))

intArray === intArray1 ? console.log(true): console.log(false)
// intArray.every((val, index) => val === intArray1[index])? true:false

// intArray.forEach(element)===intArray.forEach(element)?
//  console.log("array sorted") : console.log("array not sorted")

