var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
    }
    AbstractHandler.prototype.setNextHandler = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    };
    return AbstractHandler;
}());
var DogHandler = /** @class */ (function (_super) {
    __extends(DogHandler, _super);
    function DogHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DogHandler.prototype.handle = function (request) {
        if (request === 'meat') {
            return 'Dog: i want to eat ' + request;
        }
        return _super.prototype.handle.call(this, request);
    };
    return DogHandler;
}(AbstractHandler));
var CatHandler = /** @class */ (function (_super) {
    __extends(CatHandler, _super);
    function CatHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CatHandler.prototype.handle = function (request) {
        if (request === 'milk') {
            return 'Cat: i want to drink ' + request;
        }
        return _super.prototype.handle.call(this, request);
    };
    return CatHandler;
}(AbstractHandler));
var MonkeyHandler = /** @class */ (function (_super) {
    __extends(MonkeyHandler, _super);
    function MonkeyHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MonkeyHandler.prototype.handle = function (request) {
        if (request === 'banana') {
            return 'Monkey: i want to eat ' + request;
        }
        return _super.prototype.handle.call(this, request);
    };
    return MonkeyHandler;
}(AbstractHandler));
//clent code
var dog = new DogHandler();
var cat = new CatHandler();
var monkey = new MonkeyHandler();
dog.setNextHandler(cat).setNextHandler(monkey);
// dog <---- cat <---- monkey
// null <---- cat <---- monkey
var result = dog.handle('banana');
console.log('Who wants to eat banana.', result);
var result2 = dog.handle('milk');
console.log('Who wants to drink milk.', result2);
var result3 = dog.handle('grapes');
console.log('Who wants to eat grapes.', result3 || 'nobody ate grapes.');
