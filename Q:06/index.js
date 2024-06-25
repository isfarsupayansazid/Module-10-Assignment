// Question No 06 => 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.

let myArray = [1,2,4,3,5]
function sumArray(numbers) {
    return numbers.reduce(
        (currIndex,currValue) =>{
            return currIndex + currValue;
    },0)
}
console.log(sumArray(myArray));