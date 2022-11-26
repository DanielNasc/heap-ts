import { Heap } from "./heap"

const V = [18, 25, 41, 34, 14, 10, 52, 50, 48]
console.log("[ Vetor V ] -> ", V)

console.log("Criando Heap a partir de V...");
const heap = new Heap(V)

console.log("[ Heap ] -> ", heap.get_heap())
console.log("Removendo um valor do Heap...");
console.log("[ Valor Removido ] -> ", heap.remove())
console.log("[ Heap ] -> ",heap.get_heap())

 for (let n of V) {
    const newValue = n + 5
    console.log("Inserindo ", newValue);
    heap.insert(n + 5)
}

console.log("[ Heap ] -> ",heap.get_heap())
console.log("[ Heapsort ] -> ", heap.heapsort());
