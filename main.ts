import { Heap } from "./heap"

const rand = [2, 234, 23, 76, 85, 24, 546]
const heap = new Heap()

heap.build(rand)

console.log(rand);
console.log(heap.remove(rand))
console.log(rand);

 for (let n of [...rand])
    heap.insert(n + 5, rand)
    
console.log(rand);
console.log(heap.heapsort(rand));
