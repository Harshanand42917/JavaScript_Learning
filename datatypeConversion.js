let score = "24abv"
console.log(typeof score) // string type 
console.log(typeof(score)) // string type 

let valueInNumber = Number(score) // convert into number 
console.log(typeof valueInNumber) // it should not converted in number in first place but as a output it is showing number
console.log(valueInNumber) // it is showing NaN as ouput which is correct because it has 24abv numbers + alphabets

// when converting
//"33" => 33
//"33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) // convert into boolean
console.log(booleanIsLoggedIn);

// "" => false
// "anas" = true

let someNumber = 33
let StringNumber = String(someNumber) // convert into string value
console.log(typeof StringNumber)
console.log(StringNumber);

// *************** operations ***************

let value = 4
let negValue = -value
console.log(negValue)

console.log(2+2);// 4
console.log(2-2); //0
console.log(2*2);// 4
console.log(2**3); // 2 raised to power 3 = 8
console.log(2%3); // 2
console.log(2/3); // 0.666666666

let str1 = "harsh"
let str2 = " Anand"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) // 12
console.log(1 + "2") //12
console.log("1" + 2 + 2) // 122  basically the one thing which comes first will concatenate accordingly
console.log("1" + "2") //12
console.log("3"+1+"5") // 315

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

console.log("02" > 1) //true
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0)  // true, the reason is that an equality check == and comparisons > < >= <= work differently
// comparisons convert null to a number, treating it as 0
//  thats why (3)null >= 0 is true and null > 0 is false

// avoid these type of conversions
