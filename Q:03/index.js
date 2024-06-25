
// Question No 03 =>  03) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.


function findMax(array) {
    if (array.length === 0) {
        console.log('array is empty');
    }
    return Math.max(...array)
}

console.log(findMax([-10, 0, 10, 20])); // 20
console.log(findMax([5, 4, 3, 2, 1])); // 5
console.log(findMax([100, 200, 300, 400, 500])); // 500
console.log(findMax([3.5, 2.1, 4.6, 1.0])); // 4.6
