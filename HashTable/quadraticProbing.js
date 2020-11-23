
class HashMap {
    constructor(size){
        this.size = size;
        this.keys = this._initArray(size);
        this.values = this._initArray(size);
        this.limit = 0;
    }

    set(key, value){
        if(this.limit > this.size)throw new Error('HashMap is full');
        let hashedIndex = this._hash(key), squareNumber = 1;
        let showError = false;
        
        // Quadratic Probing
        while(this.keys[hashedIndex] !== null){
            if(hashedIndex > this.size){
                showError = true;
                break;
            }
            hashedIndex += Math.pow(squareNumber, 2);
            squareNumber++;
        }
        if(showError){
            throw new Error('no index abailable');
        }
        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;
        this.limit++;
    }

    get(key){
        let hashedIndex = this._hash(key), squareNumber = 1;
        let showError = false;

        
        while(this.keys[hashedIndex] !== key){
            if(hashedIndex > this.size){
                showError = true;
                break;
            }
            hashedIndex += Math.pow(squareNumber, 2);
            squareNumber++;
        }

        if(showError){
            throw new Error('no index abailable');
        }
        return this.values[hashedIndex];
    }

    _hash(key){
        if(!Number.isInteger(key))throw new Error('key is not integer');
        return key % this.size;
    }

    _initArray(size){
        let array = [];
        for(let i = 0; i <= size; i++){
            array.push(null);
        };
        return array;
    }
}

let hashTable = new HashMap(11);
hashTable.set(11, 'salah');
hashTable.set(12, 'mane');
hashTable.set(13, 'frimino ');
hashTable.set(20, 'alison');
hashTable.set(19, 'robertson');
hashTable.set(33, 'anderson');
hashTable.set(4, 'test');

console.log(hashTable.get(33))
console.log(hashTable.get(12))