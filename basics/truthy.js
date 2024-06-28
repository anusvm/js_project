const userMail = "anusvm@gmail.com"

if(userMail)
    {
        console.log("got the user mail");
    }
else{
    console.log("do not got yhe mail");
}
//falsy values 
//false  , ""(empty string), 0, -0, BigInt 0n,  null , undefined , NaN 
// truthy value 
// "0" , "false", " ", [], {}, function(){}-emoty function

// to check the array
if(userMail.length === 0)
    {
        console.log("array is empty");
    }

// to check the array
const emptyobj = {}
if(Object.keys(emptyobj).length === 0)
    {
        console.log("object is the empty");
    }

//nullish coalescing Operator (??): null undefined 

//let val1 = 5 ?? 10
let val1 = null ?? 10 
let val = undefined ?? 18
let val2 = null ?? 10 ?? 20
// in the place of 10 we write a function which call the value from the database like we write return value 
// to avoid null or undefined value we use flag value

// Terniary Operator 

const icePrice = 100
icePrice >=80 ? console.log("yes , more than 80") : console.log(" no, less than 80");


//we don't want to run all the code at a time so we use control flow like some conditions using 
// if-else condition , switch case , nullish , terniary Operator etc ..,
