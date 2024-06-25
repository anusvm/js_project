function saymyname() {
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
}

//saymyname()
//parameters
// function addTwoNumbers(num1, num2) {
//      console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
    const result =num1 + num2;
    return result
}

const result = addTwoNumbers(3,4)//arguments

//console.log("result : " , result);
//... spread and rest operation

function calculatecartprice (...num1){
    return num1
}

//console.log(calculatecartprice(200,400,600,500));

const user ={
    username :"anupriya",
    price : 123
}

function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username}  and price is ${anyobject.price}`);
}

handleObject(user)