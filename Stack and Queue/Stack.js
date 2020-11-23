// Stack implementation
// Methodes of Stack data Structure
// 1. Peek, 2. Insertion, 3. Deletion, 4. Access, 5. Search
//LIFO

class Stack{
    constructor(array){
        this.array = [];
        if(array)this.array = array;
    }

        //Insertion Time Complexity O(1)
    push(value){
        this.array.push(value);
    }

        //Deletion Time Complexity O(1)
    pop(){
        this.array.pop();
    }

        //Access Time Complexity O(n)
    getNthTopNode(n){
        let tempArr = this.getBuffer();
        n--;
        while(n > 0){
            n--;
            tempArr.pop();
        }
        return tempArr.pop();
    }
        
        //Seacch   Time Complexity O(n)
    stackSearch(n){
        let tempArr = this.getBuffer(), len = tempArr.length;
        while(len > 0){
            len = tempArr.length;
            if(tempArr.pop() === n){
                return true;
            }
        }
        return false;
    }

    getBuffer(index1, index2){
        if(index1 === 0 || index1 && index2){
           return this.array.slice(index1, index2);
        }else if (index1){
            return this.array.slice(index1);
        }else{
            return this.array.slice();
        }
    }

        //Peek Time Complexity O(1)
    #peek = () => {
        return this.array[this.array.length - 1];
    }

    #Empty = () => {
        return this.array.length === 0;
    }

    get isEmpty(){
        return this.#Empty();
    }
    get peek(){
        return this.#peek();
    }
    
}

let stact = new Stack();
for(let i = 1; i <= 5; i++)stact.push(i);