// implement a remote to turnOn and turnOff a ligh

abstract class ICommand {
    light: Light;
    constructor(light: Light) {
        this.light = light;
    }

    abstract execute(): void;

    abstract undo(): void;
}

class Light {
    turnOn() {
        console.log('Light is on.');
    }

    turnOff() {
        console.log('Light is off.');
    }
}

class TurnOnCommand extends ICommand {
    execute(): void {
        this.light.turnOn()
    }

    undo(): void {
        this.light.turnOff();
    }
}

class TurnOffCommand extends ICommand {
    
    execute(): void {
        this.light.turnOff();
    }

    undo(): void {
        this.light.turnOn();
    }
}

class RemoteContol {
    currentCommand!: ICommand;
    undoCommand!: ICommand;
    commandQueue: ICommand[] = [];

    addCommand(command: ICommand) {
        this.undoCommand = this.currentCommand;
        this.currentCommand = command;
        this.commandQueue.push(command);
    }

    pressButton() {
        if(this.hasCommands()) {
            const command = this.commandQueue.shift();
            command?.execute();
        }
    }

    pressUndoButton() {
        this.undoCommand?.undo();
    }

    hasCommands(): boolean {
        return this.commandQueue.length > 0;
    }

}

// client code
const remote = new RemoteContol();
const light = new Light();

remote.addCommand(new TurnOnCommand(light));
remote.addCommand(new TurnOffCommand(light));

remote.pressButton();
remote.pressButton();

