'use strict';

// Singly Linked List
// 1. Insertion 2. deletion 3. search

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    SLLNode(){
        return class {
            constructor(data){
                this.data = data;
                this.next = null;
            }
        }
    }

    //time complexity O(1)
    insert(value){
        let Node = this.SLLNode();
        if(!this.head){
            this.head = new Node(value);
        }else{
            let temp = this.head;
            this.head = new Node(value);
            this.head.next = temp;
        }

        this.size++
    }

    //time complexity O(n)
    removeNode(data){
        let currentHead = this.head;
        if(currentHead.data === data){
            this.head = currentHead.next;
            this.size--;
        }else{
            let prev = currentHead;
            while(currentHead.next){
                if(currentHead.data === data){
                    prev.next = currentHead.next;
                    prev = currentHead;
                    currentHead = currentHead.next;
                    break;
                }
                prev = currentHead;
                currentHead = currentHead.next;
            }

            if(currentHead.data === data){
                prev.next = null;
            }
            this.size--;
        }
    }

    //time complexity O(1)
    deleteAtHead(){
        let currentHead = this.head;
        this.head = currentHead.next;
        this.size--;
    }

    //time complexity O(n);
    find(data){
        let currentHead = this.head;
        while(currentHead.next){
            if(currentHead.data === data){
                return true
            }

            currentHead = currentHead.next
        }
        if(currentHead.data === data)return true;
        return false;
    }
}

let sll = new SinglyLinkedList();
for(let i = 1; i <= 5; i++)sll.insert(i);
sll.deleteAtHead();
sll.deleteAtHead();
console.log(sll.head);
console.log(sll.size);