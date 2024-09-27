function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        // If element is an even number 
        if (array[i] % 2 ==0) {
            const tripleEvenNumber = array[i] * 3;
            // Multiply this number by three 

            // Add the new number to the total
            sum += tripleEvenNumber;
        }
    }
    return sum;
}

function addOne(num) {
    return num + 1;
}
const arr = [1,2,3,4,5];
const mappedArr = arr.map((num) => num + 1);
console.log(mappedArr); // Outputs [2,3,4,5,6]
console.log(arr); // Outputs [1,2,3,4,5]

function isOdd(num) {
    return num % 2 !== 0;
}
const oddNums = arr.filter(isOdd); // iterate through arr and pass every val into isOdd function, one at a time
console.log(oddNums);
console.log(arr);