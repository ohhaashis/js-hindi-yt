// const user = {
//     username : "Ash",
//     Price : 99,
//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to website`)
//     }

// }

// user.welcomeMessage()
// user.username = "Ashish"
// user.welcomeMessage()

// function chai(){
//     console.log(this);
// }
// chai(); // this ke andar bht kch rkha hua h !


// const chai = function(){
//     let username = "Ash";
//     console.log(this.username);
// }

// arrow function

// const chai = ()=>{
//     let username = "Ash";
//     console.log(this.username);
// }
// chai()

// same

// const addtwo = ( num1 , num2) => (num1 + num2)

// console.log(addTwo(3,4));

// curly braces me return use krna hoga (Implicit return)
// parenthesis me return nhi lgate !


const addTwo = ( num1 , num2) => ({username : "Ash"})

console.log(addTwo(3,4));