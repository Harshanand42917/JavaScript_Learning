DAY 4
// based on how is data stored and accessed we divide datatypes into two types

// Primitive and Non-primitive

// Primitive : they are call by values
// 7 types : string, boolean, undefined, null, BigInt, symbol

// Referances(Non-primitive)
// array,objects,functions

const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id === anotherId) // false here the return values are not same because everytime it has unique instance

const heros = ["Ironman","spidey","loki"];
let myObj = {
    name: harsh,
    age : 22,
}

const myFun = function(){
    console.log("Hello universe")
}
console.log(typeof myFun); // it will return function specifcally function object

let myYoutubename = "harshaaandandotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername); 

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1
user2.email = "harsh@gmail.com"

console.log(user1.email);
console.log(user2.email);
