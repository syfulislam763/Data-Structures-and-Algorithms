
class HashTable{
    constructor(size){
        this.size = size;
        this.keys = this.initArray(size);
        this.values = this.initArray(size);
        this.limit = 0;
    }

    set(key, value){
        if(this.limit > this.size)throw new Error('hash table is full');
        let hashedIndex = this.hash(key), throwError = false;
 
        while(this.keys[hashedIndex] !== null){
            if(hashedIndex > this.size){
                throwError = true;
                break;
            }
            hashedIndex++;
        }

        if(throwError){
            throw new Error('index is not available');
        }

        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;
        this.limit++;
    }

    get(key){
        let hashedIndex = this.hash(key), throwError = false;

        while(this.keys[hashedIndex] !== key){
            if(hashedIndex > this.size){
                throwError = true;
                break;
            };
            hashedIndex++;
        }

        if(throwError){
            throw new Error('index is not available');
        }

        return this.values[hashedIndex];
    }

    //Double Hashing
    hash(key){
        if(!Number.isInteger(key))throw new Error('key is not valid');
        return this.secondHash(key % this.size);
    }
    secondHash(firstHashValue){
        let R = this.size - 2;
        return R - (firstHashValue % R);
    }

    initArray(size){
        let array = [];
        for(let i = 0; i < size; i++){
            array.push(null);
        }

        return array;
    }
}

let hashTable = new HashTable(13);
hashTable.set(11, 'salah');


console.log(hashTable.get(11))