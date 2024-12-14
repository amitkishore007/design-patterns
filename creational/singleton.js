"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
// class User extends Singleton {
// }
// const obj1 = new Singleton();
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);
