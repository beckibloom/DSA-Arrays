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

    // What is the length, capacity, and address of your array?
    // Each pop() will remove and return the last item of the array, so the first line removes and returns 10, then 45, then 19. 
    // this.length=3
    // this.capacity=6, this still hasn't changed
    // this.ptr = memory.allocate(3), this still has basically stayed the same?

    console.log(arr);
}

main();