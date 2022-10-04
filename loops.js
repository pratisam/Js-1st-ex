/**I - print numbers
Write an algorithms which receives an integers n and prints:

the numbers from 1 to n
the numbers from 1 to n in descending order
the numbers from -n to n
the odd numbers from 1 to n**/

let a = parseInt(5)
for(let i=1;i<= a;i++){
    console.log(i)

}
for(let i= 1; i>a; i--){  
    console.log(a);
}
for(let i= -a;i<= a;i++){
    if(i%2!=0) console.log(i)
    
}
for(let i=1; i<= a; i++){
    console.log(i)
}

/*II - print random number of integers
Write an algorithm which receives an random integer and prints from 0 to it.*/
let b = parseInt(Math.random()*10)
for(let i=0;i<= b;i++){
    console.log(i)
}

/*III - throw dices
Write an algorithm which throws a dice a given number of time and count the number of time a certain number is received.*/

let tr = 4
let count=0
for(let i =0;i< tr;i++){
    let d = parseInt(Math.random()*10);
    console.log(d)
    if (d==4){
        count++
    }
}
console.log(count +"no of count of int 4")
/*IV - even numbers
Write an algorithm which prints all the even numbers from 0 to a given number.*/
let evenNo = 16
for(let i =0;i<= evenNo;i++){
if(i%2==0) console.log(i)
}
/*V - perfect number
Write an algorithm which verify if a given positive integer is a perfect number, meaning equal to the sum of his divisors (except himself). */
let prNo = 6
let total=0
let div =  parseInt(prNo/2)
for (let i=0; i<=div; i++){
    if(prNo%i==0){
        total = total+i;
    }
}
(total==prNo)? console.log("it is a perfect integer") : console.log("it is not a perfect integer")
 