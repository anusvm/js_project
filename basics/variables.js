const accountId = 144332
let accountEmail = "anuanu@gmail.com"
var accountPassword = "1461235"
accountCity = "tilouthu"
let accountState ;
//accountId =2 not allowed

console.log(accountId);
console.table([accountId,accountEmail,accountCity, accountState])

if (condition) {
    
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack memory(Primitive- get the copy of the orginal value) ///Heap Memory(Non-Primitive - grt the refrence from the original value )
let myYoutubeNmae= "Anupriya"

let anotherName =myYoutubeNmae
anotherName = "anupriyatilouthu"

console.log(anotherName);
console.log(myYoutubeNmae);

/*****************Object***************/

let userOne = {
    email : "user@gmail.com",
    upi : "user@paytm"
}
let userTwo = userOne
//elements inside the object can be access using dot such userOne.email, userOne.upi........etc
userOne.email="supriya@gmail.com"
