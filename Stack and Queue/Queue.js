
//Queue implementation
// Methods of Queue data structure 
// 1. Peek, 2. Insertion, 3. Deletion, 4. Access, 5. Search
// FIFO

class Queue{
    constructor(array){
        this.array = [];
        if(array)this.array = array;
    }

    //Peek Time Complexity O(1)
    peek(){
        return this.array[0];
    }
    
    //Insertion Time Complexity O(1)
    enqueue(value){
        return this.array.push(value);
    }

    //Deletion Time Complexity O(n)
    dequeue(){
        return this.array.shift();
    }

    //Access Time Complexity O(n)
    access(n){
        let tempArr = this.getBuffer();
        n--;
        while(n > 0){
            tempArr.shift();
            n--;
        }
        return tempArr.shift();
    }
    // best way to get value / Access
    static accessValue (queue, n){
        let bufferArray = queue.getBuffer();
        if(n <= 0)throw new Error('index if not valid');
        let bufferQueue = new Queue(bufferArray);
        n--;
        while( n !== 0 ){
            bufferQueue.dequeue();
            n--
        }
        return bufferQueue.dequeue();
    }

    //Search Time Complexity O(n)
    search(n){
        let tempArr = this.getBuffer(), len = tempArr.length;
        while(len > 0){
            len = tempArr.length;
            if(tempArr.shift() === n){
                return true;
            }
        }
        return false;
    }

    //best way to search value / Search
    static searchValue(queue, n){
        let bufferArray = queue.getBuffer();
        if(n <= 0)throw new Error('index is not valid');
        let bufferQueue = new Queue(bufferArray);
        while(!bufferQueue.isEmpty()){
            if(bufferQueue.dequeue() === n){
                return true;
            }
        }
        return false;
    }

    getBuffer(){
        return this.array.slice();
    }

    isEmpty(){
        return this.array.length === 0;
    }
}

let queue = new Queue();
for(let i = 1; i <= 5; i++)queue.enqueue(i);
queue.enqueue(10)
console.log(queue.array)
console.log(queue.access(6))
console.log(Queue.accessValue(queue, 6))

console.log(queue.search(11))
console.log(Queue.searchValue(queue, 4))
console.log(queue.array)