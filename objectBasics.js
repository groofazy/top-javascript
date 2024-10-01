//Rewriting sumofTripledEvens with new methods

const arr = [1,2,3,4,5];

function isEven(num) {
    return num % 2 === 0;
}

function multiplyByThree(num) {
    return num * 3;
}

function sumOfTripledEvens(array) {
    isEven(array); // checks if num in arr is even
    console.log(array);
    
    const multipliedArr = array.map(multiplyByThree); // mulitplies elements of array by 3
    console.log(multipliedArr);

    const sumOfTripledEvens = array.reduce((total, currentItem) => {
        return total + currentItem;
    }, 1);

    console.log(sumOfTripledEvens);
}

// Actual Solution 
function sumOfTripledEvens(array) {
    return array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr);
  }