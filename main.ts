import { Heap } from "./heap"

const rand = [2, 234, 23, 76, 85, 24, 546]
const heap = new Heap(rand)

console.log(heap.get_heap())
console.log(heap.remove())
console.log(heap.get_heap())

 for (let n of rand)
    heap.insert(n + 5)
    

console.log(heap.get_heap())
console.log(heap.heapsort());
