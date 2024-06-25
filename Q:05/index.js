// Question no 05 => 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.


let myArray =  [1,2,4,3,5,8,85,48,61,85,63,54,88,494,316]
function filterOddNumbers(numbers){
    return numbers.filter(function (numbers) {
        return numbers % 2 !== 0
    })
}

console.log(filterOddNumbers(myArray));