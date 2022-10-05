export class Heap {
    private _heap: number[] = [];

    private _checkFindex(findex: number) {
        if (findex > this._heap.length || findex <= 1)
            return false;
        return true
    }

    up(findex: number) {
        if (!this._checkFindex(findex))
            return;

        // convert fanciful index to an array index
        findex--;
        const parent_index = findex != 0 ? Math.floor(findex/2): 1;

        if (this._heap[findex] > this._heap[parent_index]) {
            // using destructuring to swap the values
            [this._heap[findex], this._heap[parent_index]] = [this._heap[parent_index], this._heap[findex]];
            // recursive
            this.up(parent_index + 1);
        }
    }

    down(findex: number) {
        if (!this._checkFindex(findex) || findex == this._heap.length)
            return;

        // convert fanciful index to an array index
        findex--;

        let child_index = findex != 0 ? findex * 2 : 1;
        
        if (this._heap[child_index] < this._heap[child_index + 1])
            child_index++;
     
        if (this._heap[child_index] > this._heap[findex]) {
            [this._heap[findex], this._heap[child_index]] = [this._heap[child_index], this._heap[findex]];
            this.down(child_index + 1);
        }
    }

    insert(value: number) {
        this._heap.push(value)

        this.up(this._heap.length)
    }

    get_heap() {
        return this._heap
    }
}