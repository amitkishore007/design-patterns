// need a collection to iterate 
var MyIterator = /** @class */ (function () {
    function MyIterator(numbs) {
        this.position = 0;
        this.numbs = numbs;
    }
    MyIterator.prototype.hasNext = function () {
        if (this.position < this.numbs.length) {
            return true;
        }
        return false;
    };
    MyIterator.prototype.next = function () {
        if (this.hasNext()) {
            var num = this.numbs[this.position];
            this.position += 1;
            return num;
        }
        return null;
    };
    return MyIterator;
}());
// client code
var numbers = [1, 2, 3, 4, 5, 6];
var iterator = new MyIterator(numbers);
console.log('hasNext: ', iterator.hasNext());
console.log('Number: ', iterator.next());
console.log('Number: ', iterator.next());
console.log('Number: ', iterator.next());
console.log('Number: ', iterator.next());
console.log('Number: ', iterator.next());
console.log('Number: ', iterator.next());
console.log('Number: ', iterator.next());
console.log('hasNext: ', iterator.hasNext());
