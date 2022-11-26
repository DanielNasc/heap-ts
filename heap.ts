/* 
    OBS
    Para facilitar os calculos dos indices, trato o vetor do Heap como se seu primeiro
    indice fosse 1
    Nas funções o chamo de heapIndex
    Só é necessária uma pequena conversão na hora de, de fato, acessar os valores no array do heap
*/

export class Heap {
    private _heap: number[] = []

    constructor(V?: number[]) {
        if (!V)
            return
            
        // Criar um heap a partir de um vetor V passado por parametro

        this._heap = [...V] // copia os valores de V para o vetor do Heap pertencente à atual instancia da classe
        
        for (let i = Math.floor(V.length/2); i >= 1; i--) {
            this.down(i)
        }
    }

    get_heap() {
        return this._heap
    }

    private up(heapIndex: number) {
        if (heapIndex > this._heap.length || heapIndex <= 0)
            return

        // converter o heapIndex para um indice real
        heapIndex--
            
        const parent_index = Math.floor(heapIndex/2)
        

        if (this._heap[heapIndex] > this._heap[parent_index]) {
            // using destructuring to swap the values
            [this._heap[heapIndex], this._heap[parent_index]] = [this._heap[parent_index], this._heap[heapIndex]]
            // recursive
            this.up(parent_index + 1)
        }
    }

    private down(heapIndex: number, heap: number[] = this._heap) {
        if (heapIndex < 1 || heapIndex >= heap.length)
            return

        let child_index = heapIndex != 1 ? heapIndex * 2 - 1 : 1

        // converter o heapIndex para um indice real
        heapIndex--
            
        if (heap[child_index] < heap[child_index + 1])
            child_index++
     
        if (heap[child_index] > heap[heapIndex]) {
            [heap[heapIndex], heap[child_index]] = [heap[child_index], heap[heapIndex]]
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