interface Handler {
    setNextHandler(handler: Handler): Handler;

    handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
    nextHandler!: Handler | null;

    setNextHandler(handler: Handler): Handler {
        this.nextHandler = handler;

        return handler
    }

    handle(request: string): string | null {
        if(this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }
}

class DogHandler extends AbstractHandler {
    handle(request: string): string | null {
        if(request === 'meat') {
            return 'Dog: i want to eat '+ request;
        }

        return super.handle(request);
    }
}

class CatHandler extends AbstractHandler {
    handle(request: string): string | null {
        if(request === 'milk') {
            return 'Cat: i want to drink '+ request;
        }

        return super.handle(request);
    }
}

class MonkeyHandler extends AbstractHandler {
    handle(request: string): string | null {
        if(request === 'banana') {
            return 'Monkey: i want to eat '+ request;
        }

        return super.handle(request);
    }
}

//clent code
const dog = new DogHandler();
const cat = new CatHandler();
const monkey = new MonkeyHandler();
dog.setNextHandler(cat).setNextHandler(monkey);

// dog <---- cat <---- monkey
// null <---- cat <---- monkey

const result = dog.handle('banana');
console.log('Who wants to eat banana.', result);

const result2 = dog.handle('milk');
console.log('Who wants to drink milk.', result2);

const result3 = dog.handle('grapes');
console.log('Who wants to eat grapes.', result3 || 'nobody ate grapes.');


