import { Heap } from "./heap";

const heap = new Heap();
const rand = [2, 234, 23, 76, 85, 24, 546]

for (let n of rand)
    heap.insert(n)

console.log(heap.get_heap());
