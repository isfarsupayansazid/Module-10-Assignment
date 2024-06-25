// Question no 07 => 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.

let myArray = [2,5,3,8,5,9,1,-2,-8]

function sortArray(numbers) {
    return numbers.slice().sort(function(a,b){
        return a - b;
    })
}

console.log(sortArray(myArray));