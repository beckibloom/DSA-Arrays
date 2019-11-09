const MyArray = require('./my-array.js')

function main() {
    MyArray.SIZE_RATIO = 3;

    let arr = new MyArray();

    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    arr.pop();
    arr.pop();
    arr.pop();

    console.log(arr);

    // Print the 1st item of array arr
    console.log(arr[0]);

    // Empty the array and add just 1 item: arr.push("tauhida");
    arr.remove(2);
    arr.remove(1);
    arr.remove(0);
    arr.push("tauhida");

    //Print this 1 item you just added. What is the result? Can you explain your result?
    console.log(arr[0]);
        //Cannot run this code because attempt results with "memory.allocate is not a function"
        //I would guess that the result would be "tauhida" but the question makes me think it would result in something less obvious... so perhaps it will result in undefined, and maybe this is because the .push() method added the item to another index that is not 0?

    //What is the purpose of the _resize() function in your Array class?    
        //Frees up more memory for the array to use as needed, or returns an error if 'out of memory'
        //Amount of available memory is reflected by this._capacity, which is updated in the _resize()
}

main();