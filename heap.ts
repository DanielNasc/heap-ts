export class Heap {
    private _heap: number[] = []

    private _checkFindex(findex: number) {
        if (findex > this._heap.length || findex <= 0)
            return false
        return true
    }

    constructor(array?: number[]) {
        if (!array)
            return

        this._heap = [...array] // clone array
        
        for (let i = Math.floor(array.length/2); i >= 1; i--) {
            this.down(i)
        }
    }

    get_heap() {
        return this._heap
    }

    up(findex: number) {
        if (!this._checkFindex(findex))
            return

        // convert fanciful index to an array index
        findex--
        
        const parent_index = Math.floor(findex/2)
        
        if (this._heap[findex] > this._heap[parent_index]) {
            // using destructuring to swap the values
            [this._heap[findex], this._heap[parent_index]] = [this._heap[parent_index], this._heap[findex]]
            // recursive
            this.up(parent_index + 1)
        }
    }

    down(findex: number) {
        if (findex < 1 || findex >= this._heap.length)
            return

        let child_index = findex != 1 ? findex * 2 - 1 : 1

        // convert fanciful index to an array indexs
        findex--
            
        if (this._heap[child_index] < this._heap[child_index + 1])
            child_index++
     
        if (this._heap[child_index] > this._heap[findex]) {
            [this._heap[findex], this._heap[child_index]] = [this._heap[child_index], this._heap[findex]]
            this.down(child_index + 1)
        }
    }

    insert(value: number) {
        this._heap.push(value)
        
        this.up(this._heap.length)
    }

    remove() {
        if (this._heap.length === 0)
            return null

        const element = this._heap[0]
        this._heap[0] = this._heap[this._heap.length - 1]
        this._heap.pop()

        this.down(1)

        return element
    }
}