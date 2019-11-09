//sample input: tauhida parveen

function urlify(string) {
    let arr = string.split('')
    for (let i=0; i<arr.length;i++) {
        if (arr[i] === ' ') {
            arr[i] === '%20'
        }
    }
}

//sample output: tauhida%20parveen

//does this meet the requirement that the function should 'only make one pass through the string'?