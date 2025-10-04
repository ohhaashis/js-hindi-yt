// singleton

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name : "Ash",
    age : 18,
    location : "himachal",
    IsLoggedIn : false,
    [mySym] : "mykey1",
}
console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser[mySym])

myArr = ["h","i"]

JsUser.age = 17;
console.log(JsUser.age)