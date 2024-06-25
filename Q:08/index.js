// Question no 08 => 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"


let string = "hello world!";
function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}
console.log(capitalizeFirstLetter(string));