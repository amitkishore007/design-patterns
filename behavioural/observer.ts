// need to defined the subject class
    // it will have a list of observers which will observe the subject
    interface ISubject {
        registerObserver(observer: IObserver): void;
        removeObserver(observer: IObserver): void;
       notify(): void;
    }

// need to defined observer class
    // this observer class will have an update method which will receive the updates from subject
    interface IObserver {
        update(data: any): void;
    }


class Subject implements ISubject {
    private observers: IObserver[] = [];

    private state: any = {};

    registerObserver(observer: IObserver): void {
        this.observers.push(observer); 
    }

    removeObserver(observer: IObserver): void {
        const index = this.observers.indexOf(observer);
        if(index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notify(): void {
        for (let index = 0; index < this.observers.length; index++) {
            const observe = this.observers[index];
            observe.update(this);
        }
    }

    setState(data: any) {
        this.state = data;
        this.notify();
    }

    getState() {
        return this.state;
    }
}


class Observer implements IObserver {
    update(subject: Subject): void {
        console.log('Received Updated for observer: ', subject.getState());
    }
}

// client code
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();
const subject = new Subject();

subject.registerObserver(observer1);
subject.registerObserver(observer2);
subject.registerObserver(observer3);

subject.setState({name:"ob1"});