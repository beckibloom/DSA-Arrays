const MyArray = require('./my-array.js')

function main() {
    MyArray.SIZE_RATIO = 3;

    //create a new instance of the Array class
    let arr = new MyArray();

    //add an item to the array
    arr.push(3);
    //What is the length, capacity and memory address of your array?
        //this.length = 1
        //this._capacity = 6
            //(this.length + 1) * SIZE_RATIO
        //this.ptr = memory.allocate(1)
        //Memory address is this.ptr + this.length?

    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);

    console.log(arr);
}

main();