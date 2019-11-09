// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

// sample input: [1, 5, 7, 10, 21, 3, 4]


function sortLowestToHighest(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
}

function filterBelowFive(array) {
    let sortedArray = array.sort(sortLowestToHighest)
    //change this loop, it's not right
    for (let i=0; i<array.length; i++) {
        let index = array.length/2
        if (index < 5) {
            //remove index items to the left
        }
        if (index = 5) {
            //check the index to the left next
        }
        if (index > 5) {
            //check the halfway point of the first half next
        }
    }
}

// sample output: [5, 7, 10, 21]