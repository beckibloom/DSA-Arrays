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
    //What is the length, capacity, and address of your array? Explain the result of your program after adding the new lines of code.
        // this.length = 6
        // this._capacity = 6 - because at the last iteration of push the capacity was 6 and the length was 5, therefore the capacity won't increase until/unless the length is >= to the capacity
        // this.ptr = this.allocate(this.length)
        // memory address is this.ptr + 6?

    console.log(arr);
}

main();