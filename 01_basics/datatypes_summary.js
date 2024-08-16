// // primitive

// // 7 types : string, number, boolearn, null, undefined, symbol, BigInt

// const score = 100
// const scorevalue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = symbol('123')
// const anotherId = symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 2314657468745649875



// // Refrence (Non primitive)

// // Array, objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"]
// let myobj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function (){
//     console.log("hello world");
// }

// console.log(typeof anotherId);


// // +++++++++++++++++++++++++++++++++++++++++++++++

// // stack (primitive), heap (non-primitive)

let myYoutubename = "rahulkumardotcom"

 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anothername);


 let user = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userone

 userTwo.email = "rahul@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);