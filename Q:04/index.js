// Question no 04 => 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.

let names = "Hello Javascript"
function reverseString(str) {
    return str.split("").reverse().join("")
}
console.log(reverseString(names));