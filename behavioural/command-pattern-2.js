// need to write a fileSystem where we can create a file, delete a file and update a file.
var MyFileSystem = /** @class */ (function () {
    function MyFileSystem() {
        this.fileCommands = [];
    }
    MyFileSystem.prototype.setCommand = function (command) {
        this.fileCommands.push(command);
    };
    MyFileSystem.prototype.hasCommands = function () {
        return this.fileCommands.length > 0;
    };
    MyFileSystem.prototype.executeFileCommand = function () {
        if (this.hasCommands()) {
            var command = this.fileCommands.shift();
            command === null || command === void 0 ? void 0 : command.execute();
        }
    };
    MyFileSystem.prototype.executeUndoCommand = function () {
        var command = this.fileCommands.pop();
        command === null || command === void 0 ? void 0 : command.undo();
    };
    return MyFileSystem;
}());
var CreateFile = /** @class */ (function () {
    function CreateFile(path) {
        this.path = path;
    }
    CreateFile.prototype.execute = function () {
        console.log('Creating a file: ', this.path);
    };
    CreateFile.prototype.undo = function () {
        console.log('Deleting a file: ', this.path);
    };
    return CreateFile;
}());
var DeleteFile = /** @class */ (function () {
    function DeleteFile(path) {
        this.path = path;
    }
    DeleteFile.prototype.execute = function () {
        console.log('Deleting a file: ', this.path);
    };
    DeleteFile.prototype.undo = function () {
        console.log('restoring a file: ', this.path);
    };
    return DeleteFile;
}());
var UpdateFile = /** @class */ (function () {
    function UpdateFile(path, newContent, oldContent) {
        this.path = path;
        this.newContent = newContent;
        this.oldContent = oldContent;
    }
    UpdateFile.prototype.execute = function () {
        console.log('Updating file: ', this.path, ' with new content: ', this.newContent);
    };
    UpdateFile.prototype.undo = function () {
        console.log('restoring the file: ', this.path, ' with the old content: ', this.oldContent);
    };
    return UpdateFile;
}());
// client code
var myfileSystem = new MyFileSystem();
myfileSystem.setCommand(new CreateFile('/path/test.txt'));
myfileSystem.setCommand(new DeleteFile('/path/test.txt'));
myfileSystem.setCommand(new UpdateFile('/path/test.txt', 'This is new Old', 'The Old Content.'));
// while(myfileSystem.hasCommands()) {
//     myfileSystem.executeFileCommand();
// }
myfileSystem.executeUndoCommand();
