//Implement the array from scratch using the memory module

const memory = require('../memory')

class MyArray {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        //if length is longer than capacity
        if (this.length >= this._capacity) {
            //resize using ratio
            this._resize((this.length + 1) * MyArray.SIZE_RATIO)
        }
        //use memory.set to set the value at the correct ptr index based on ptr and length
        memory.set(this.ptr + this.length, value)
        //increment length so that allocation increases
        this.length++
    }

    _resize(size) {
        //store oldPtr
        let oldPtr = this.ptr
        //update ptr allocating for the given size
        this.ptr = memory.allocate(size)
        //throw error if new ptr is null
        if (this.ptr === null) {
            throw new Error('Out of memory')
        }
        //use memory.copy where toIdx is new ptr, fromIdx is old, for current length of array
        memory.copy(this.ptr, oldPtr, this.length)
        //use memory.free to clear oldPtr space
        memory.free(oldPtr)
        //set capacity to the increased size
        this._capacity = size
    }

    get(index) {
        //if index does not exist in current array, throw index error
        //index is less than 0 
        // OR
        //index is greater or equal to length (if it is the last item of the array, the index number should be 1 less than the length)
        if (index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        //return a memory.get for the index in the current array referenced by this.ptr
        return memory.get(this.ptr + index)
    }

    //popping an item off the end of the array
    pop() {
        //throw an index error if the length is 0, nothing to pop
        if (this.length === 0) {
            throw new Error('Index error')
        }
        //establish the value of the last item using memory.get
        const value = memory.get(this.ptr + this.length - 1)
        //decrement length
        this.length--
        //return the value removed
        return value
    }

    insert(index, value) {
        //if the index doesn't exist, throw index error
        if (index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        //if the length is longer than the capacity, resize
        //include greater or equal to because length will be increased by 1 so we need to have enough space
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * MyArray.SIZE_RATIO)
        }
        //use memory.copy 
        //to the ptr+index+1
        //from memory address
        //size of total length minus the index being copied
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        //memory.set
        // new index and value
        memory.set(this.ptr + index, value)
        //increment length by 1
        this.length++
    }

    remove(index) {
        //if index doesn't exist
        //throw index error
        if (index < 0 || index >= this.length) {
            throw new Error('Index error')
        }
        //memory.copy
        //to the current index
        //from the index to the right
        //size is from removal point to the end of the array, so take total length - starting index - 1
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        //decrement length by 1
        this.length--
    }
}

MyArray.SIZE_RATIO = 3

module.exports = MyArray;