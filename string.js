/**
 * I - concatenation
Write a function which receives two strings and returns them as one string.*/
function concate(a,b){
    return a.concat(b)
    }

console.log(concate("be","code"))
/**II - lowercase
Write a function which receives a character in uppercase and prints it in lowercase.*/
function lc(l){
    return l.toLowerCase()
   }
   
   console.log(lc("LOWERCASE"))

/**III - uppercase
Write a function which receives a string in lowercase and returns an uppercase sentence.*/
function uc(l){
    return l.toUpperCase()
   }
   
   console.log(uc("upperCASE"))

/**IV - convert name
Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe"*/

function nom(family,prenom){
    return prenom +" " +family
    }
console.log(nom('Doe','John'))

/**V - whitespace
Write a function which receives a sentence full of whitespace and returns it without them.
 */
function whiteSpace(str){
    return str = str.replace(/\s/g, '');
}

console.log(whiteSpace("I am John Doe"))