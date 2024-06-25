//singleton   object.create  it is constructer
//const tinderuser =  new Object()
//object literals
const mysym = Symbol("key1")
//nin-singleton object
const user = {
    name : "Anupriya",
    age : 21,
    [mysym] :"mykey1",
    "full name" : "anu priya",
    email : "anusvm@gmail.com",
    location : "tilothu",
}
// value can be overwrite by using the below syntex
user.email = "anupriyatilouthu@gmail.com"

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// to refer a suymbol we use square bracket
//console.log(user[mysym]);

//Object.freeze(user)

user.greeting = function ()
{
    console.log("hello js user");
}

user.greetingtwo = function()
{
    console.log(`hello js user ${this.name}`);
}

// console.log(user.greetingtwo());
//console.log(user.greeting);

const obj1 = {1:"a",2:"b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1,obj2)

//spread using .... as used the below syntax
const obj3 = {...obj1,...obj2}
//console.log(obj3);


const users = {
    id :1,
    email : "a@gmail.com"
}
//users[1].email
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name= "spk"
tinderuser.isloggedIn = "false"
// console.log(tinderuser);
// console.log(Object.keys(tinderuser));  
// console.log(tinderuser.hasOwnProperty('isloggedIn'));

//destucturing of object


const course = {
    coursename :"javascript",
    price : "999",
    courseInstructor : "hitesh"
}

//course.courseInstructor

const {courseInstructor : instructor} = course

console.log(courseInstructor);
console.log(instructor);

/*json

{
    name : "anupriya",
    coursename : " js in hindi",
    instructor : "free"
}*/