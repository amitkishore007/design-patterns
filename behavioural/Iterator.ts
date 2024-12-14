// need a collection to iterate 

interface IIterator<T> {
    hasNext(): boolean;
    next(): T | null;
}

class MyIterator<T> implements IIterator<T> {
    private collection: T[];
    private position: number = 0;

    constructor(collection: T[]) {
        this.collection = collection;
    }

    hasNext(): boolean {
        if(this.position < this.collection.length) {
            return true;
        }

        return false;
    }

    next(): T | null {
        if(this.hasNext()) {
            const num = this.collection[this.position];
            this.position += 1;
            return num;
        }

        return null;
    }
}

// client code

const numbers = [1,2,3,4,5,6];
const iterator = new MyIterator(numbers);

console.log('hasNext: ', iterator.hasNext());
console.log('Number: ', iterator.next());
console.log('Number: ', iterator.next());
console.log('Number: ', iterator.next());
console.log('Number: ', iterator.next());
console.log('Number: ', iterator.next());
console.log('Number: ', iterator.next());
console.log('Number: ', iterator.next());
console.log('hasNext: ', iterator.hasNext());
