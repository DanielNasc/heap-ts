export class Heap {
    build(array: number[]) {
        for (let i = Math.floor(array.length/2); i >= 1; i--) {
            this.down(i, array)
        }
    }

    private up(findex: number, heap: number[]) {
        if (!(findex > heap.length || findex <= 0))
            return

        // convert fanciful index to an array index
        findex--
        
        const parent_index = Math.floor(findex/2)
        
        if (heap[findex] > heap[parent_index]) {
            // using destructuring to swap the values
            [heap[findex], heap[parent_index]] = [heap[parent_index], heap[findex]]
            // recursive
            this.up(parent_index + 1, heap)
        }
    }

    private down(findex: number, heap: number[]) {
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

    insert(value: number, heap: number[]) {
        heap.push(value)
        
        this.up(heap.length, heap)
    }

    remove(heap: number[]) {
        if (heap.length === 0)
            return null

        const element = heap[0]
        heap[0] = heap[heap.length - 1]
        heap.pop()

        this.down(1, heap)

        return element
    }

    heapsort(heap: number[]) {
        const clone = [...heap]
        const sorted: number[] = []
        this.build(clone)

        for (let i = heap.length; i > 1; i--) {
            const elem = this.remove(clone)

            if (!elem) return [];

            sorted.push(elem)
        }

        return sorted
    }
}