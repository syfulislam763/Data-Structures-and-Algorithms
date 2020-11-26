
//Doubly Linked List
// 1.Insection 2. Deletion 3.Search

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    DLLNode(){
        return class {
            constructor(data){
                this.data = data;
                this.next = null;
                this.prev = null;
            }
        }
    }

    //Insertion at the Head
    insertAtHead(data){
        let Node = this.DLLNode();
        if(this.head === null){
            this.head = new Node(data);
            this.tail = this.head;
        }else{
            let temp = new Node(data);
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
        }
        this.size++;
    }
    
    //Insertion at the Tail
    insertAtTail(data){
        let Node = this.DLLNode();
        if(this.tail === null){
            this.tail = new Node(data);
            this.head = this.tail;
        }else{
            let temp = new Node(data);
            temp.next = this.tail; 
            this.tail.next = temp;
            this.tail = temp;
        }

        this.size++; 
    }

    deleteHead(){
        let toReturn = null;
        if(this.head !== null){
            toReturn = this.head.data;

            if(this.tail === this.head){
                this.head = null;
                this.tail = null;
            }else{
                this.head = this.head.next;
                this.head.prev = null;
            }
        }
        this.size--;
        return toReturn;
    }

    deleteTail(){
        let toReturn = null;

        if(this.tail !== null){
            toReturn = this.tail.data;

            if(this.tail ===  this.head)
            {
                this.head = null;
                this.tail = null;
            }else{
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
        }

        this.size--;
        return toReturn;
    }

    searchHead(data){
        let currentHead = this.head;

        while(currentHead.next){
            if(currentHead.data === data){
                return true;
            }
            currentHead = currentHead.next;
        }

        return false;
    }

    searchTail(data){
        let currentTail = this.tail;

        while(currentTail.prev){
            if(currentTail.data === data){
                return true;
            }

            currentTail = currentTail.prev;
        }
        return false;
    }

    isEmty(){
        return this.size === 0;
    }

}

let dll =   new DoublyLinkedList();
for(let i = 1; i <= 2; i++)dll.insertAtHead(i);
for(let i = 20; i <= 25; i++)dll.insertAtTail(i);
for(let i = 3; i <= 5; i++)dll.insertAtHead(i);

dll.deleteHead();
dll.deleteHead();
console.log(dll.head)
console.log(dll.tail)
console.log(dll.size)