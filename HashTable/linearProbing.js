
class HashTable{
    constructor(size){
        this.size = size;
        this._keys = this._initArray(size);
        this._values = this._initArray(size);
        this._limit = 0;
    }
    
    set(key, value){
        if(this._limit > this.size)throw new Error('hashTable is full');

        let hashedIndex = this._hash(key);

        //Linear Probing
        while(this._keys[hashedIndex] !== null){
            hashedIndex++;
        }
        this._keys[hashedIndex] = key;
        this._values[hashedIndex] = value;
        this._limit++;
    }

    get(key){
        let hashedIndex = this._hash(key);

        while(this._keys[hashedIndex] !== key){
            if(hashedIndex > this.size)break;
            hashedIndex++;
        }

        return this._values[hashedIndex];
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

let hashTable = new HashTable(13);

hashTable.set(67, 'mohamed salah');
hashTable.set(107, 'sadio mane');
hashTable.set(20, 'rodrigo');
hashTable.set(33, 'vinisious');

console.log(hashTable.get(107));
console.log(hashTable.get(33));
console.log(hashTable.get(199))