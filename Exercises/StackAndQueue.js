'use strict';

class Stack{
    constructor(array){
        this.array = [];
        if(array)this.array = array;
    }
    peek(){
        return this.array[this.array.length - 1];
    }

    push(value){
        this.array.push(value);
    }

    pop(){
        return this.array.pop(); 
    }

    access(n){
        let bufferArray = this.getBuffer();
        if(n <= 0)throw new Error('there are no value');
        let bufferStack = new Stack(bufferArray);
        n--;
        while( n !== 0){
            bufferStack.pop();
            n--;
        };
        return bufferStack.pop();
    }

    search(n){
        let bufferArray = this.getBuffer();
        if(n <= 0)throw new Error('there are no value');
        let bufferStack = new Stack(bufferArray);
        while(!bufferStack.isEmpty()){
            if(bufferStack.pop() === n){
                return true;
            };
        };
        return false;
    }

    getBuffer(){
        return this.array.slice();
    }

    isEmpty(){
        return this.array.length === 0;
    }
};

class Queue{
    constructor(array){
        this.array = [];
        if(array)this.array = array;
    }
    peek(){
        return this.array[0];
    }

    enqueue(value){
        this.array.push(value);
    }

    dequeue(){
        return this.array.shift();
    }

    access(n){
        let bufferArray = this.getBuffer();
        if(n <= 0)throw new Error('there are no value');
        let bufferQueue = new Queue(bufferArray);
        n--;
        while( n !== 0 ){
            bufferQueue.dequeue();
            n--;
        };
        return bufferQueue.dequeue();
    }

    search(n){
        let bufferArray = this.getBuffer();
        if(n <= 0)throw new Error('there are no value');
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

//Queue Using Stack;
class TowStackQueue{
    constructor(stack1, stack2){
        this.inbox = stack1;
        this.outbox = stack2;
    };

    enqueue(value){
        this.inbox.push(value);
    }

    dequeue(){
        if(this.outbox.isEmpty()){
            while(!this.inbox.isEmpty()){
                this.outbox.push(this.inbox.pop())
            };
        };
        return this.outbox.pop();
    }
};


let towStackQueue = new TowStackQueue(new Stack(), new Stack())

//Stack Using Queue;
class TowQueueStack{
    constructor(queue1, queue2){
        this.inbox = queue1;
        this.outbox = queue2;
    };

    push(value){
        this.inbox.enqueue(value);
    }

    pop(){
        while( !this.inbox.isEmpty() ){
            this.outbox.array.unshift(this.inbox.dequeue());
        }

        return this.outbox.dequeue();
    }
}

let towQueueStack = new TowQueueStack(new Queue(), new Queue());
towQueueStack.push(1);
towQueueStack.push(2);
towQueueStack.push(3);

console.log(towQueueStack.pop())

