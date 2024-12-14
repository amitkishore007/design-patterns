var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
        this.state = {};
    }
    Subject.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    };
    Subject.prototype.notify = function () {
        for (var index = 0; index < this.observers.length; index++) {
            var observe = this.observers[index];
            observe.update(this);
        }
    };
    Subject.prototype.setState = function (data) {
        this.state = data;
        this.notify();
    };
    Subject.prototype.getState = function () {
        return this.state;
    };
    return Subject;
}());
var Observer = /** @class */ (function () {
    function Observer() {
    }
    Observer.prototype.update = function (subject) {
        console.log('Received Updated for observer: ', subject.getState());
    };
    return Observer;
}());
// client code
var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var subject = new Subject();
subject.registerObserver(observer1);
subject.registerObserver(observer2);
subject.registerObserver(observer3);
subject.setState({ name: "ob1" });
