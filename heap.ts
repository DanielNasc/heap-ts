export class Heap {
    private _heap: number[] = []

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

    private up(findex: number) {
        if (!(findex > this._heap.length || findex <= 0))
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

    private down(findex: number, heap: number[] = this._heap) {
        if (findex < 1 || findex >= heap.length)
            return

        let child_index = findex != 1 ? findex * 2 - 1 : 1

        // convert fanciful index to an array indexs
        findex--
            
        if (heap[child_index] < heap[child_index + 1])
            child_index++
     
        if (heap[child_index] > heap[findex]) {
            [heap[findex], heap[child_index]] = [heap[child_index], heap[findex]]
            this.down(child_index + 1, heap)
        }
    }

    insert(value: number) {
        this._heap.push(value)
        
        this.up(this._heap.length)
    }

    remove(arr: number[] = this._heap) {
        if (this._heap.length === 0)
            return null

        const element = arr[0]
        arr[0] = arr[arr.length - 1]
        arr.pop()

        this.down(1, arr)

        return element
    }

    heapsort() {
        const sorted: number[] = []
        const clone = [...this._heap]

        for (let i = clone.length; i > 1; i--) {
            const elem = this.remove(clone)

            if (!elem) return [] as number[]

            sorted.push(elem)
        }

        return sorted
    }
}