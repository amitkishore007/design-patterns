// need to write a fileSystem where we can create a file, delete a file and update a file.

interface IFileCommand {
    
    execute(): void;

    undo(): void;

}

class MyFileSystem {
    private fileCommands: IFileCommand[] = [];

    setCommand(command: IFileCommand) {
        this.fileCommands.push(command);
    }

    hasCommands(): boolean {
        return this.fileCommands.length > 0;
    }

    executeFileCommand() {
        if(this.hasCommands()) {
            const command = this.fileCommands.shift();
            command?.execute();
        }
    }

    executeUndoCommand() {
        const command = this.fileCommands.pop();
        command?.undo();
    }
}

class CreateFile implements IFileCommand {
    
    constructor(private path: string) {}

    execute(): void {
        console.log('Creating a file: ', this.path);
    }

    undo(): void {
        console.log('Deleting a file: ', this.path);
    }
}

class DeleteFile implements IFileCommand {
    
    constructor(private path: string) {}

    execute(): void {
        console.log('Deleting a file: ', this.path);
    }

    undo(): void {
        console.log('restoring a file: ', this.path);
    }
}

class UpdateFile implements IFileCommand {
    
    constructor(private path: string, private newContent: string, private oldContent: string) {}

    execute(): void {
        console.log('Updating file: ', this.path, ' with new content: ', this.newContent);
    }

    undo(): void {
        console.log('restoring the file: ', this.path, ' with the old content: ', this.oldContent);
    }
}

// client code
const myfileSystem = new MyFileSystem();

myfileSystem.setCommand(new CreateFile('/path/test.txt'));
myfileSystem.setCommand(new DeleteFile('/path/test.txt'));
myfileSystem.setCommand(new UpdateFile('/path/test.txt', 'This is new Old', 'The Old Content.'));

// while(myfileSystem.hasCommands()) {
//     myfileSystem.executeFileCommand();
// }

myfileSystem.executeUndoCommand();

