// implement a remote to turnOn and turnOff a ligh
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
var ICommand = /** @class */ (function () {
    function ICommand(light) {
        this.light = light;
    }
    return ICommand;
}());
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.turnOn = function () {
        console.log('Light is on.');
    };
    Light.prototype.turnOff = function () {
        console.log('Light is off.');
    };
    return Light;
}());
var TurnOnCommand = /** @class */ (function (_super) {
    __extends(TurnOnCommand, _super);
    function TurnOnCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TurnOnCommand.prototype.execute = function () {
        this.light.turnOn();
    };
    TurnOnCommand.prototype.undo = function () {
        this.light.turnOff();
    };
    return TurnOnCommand;
}(ICommand));
var TurnOffCommand = /** @class */ (function (_super) {
    __extends(TurnOffCommand, _super);
    function TurnOffCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TurnOffCommand.prototype.execute = function () {
        this.light.turnOff();
    };
    TurnOffCommand.prototype.undo = function () {
        this.light.turnOn();
    };
    return TurnOffCommand;
}(ICommand));
var RemoteContol = /** @class */ (function () {
    function RemoteContol() {
        this.commandQueue = [];
    }
    RemoteContol.prototype.addCommand = function (command) {
        this.undoCommand = this.currentCommand;
        this.currentCommand = command;
        this.commandQueue.push(command);
    };
    RemoteContol.prototype.pressButton = function () {
        if (this.hasCommands()) {
            var command = this.commandQueue.shift();
            command === null || command === void 0 ? void 0 : command.execute();
        }
    };
    RemoteContol.prototype.pressUndoButton = function () {
        var _a;
        (_a = this.undoCommand) === null || _a === void 0 ? void 0 : _a.undo();
    };
    RemoteContol.prototype.hasCommands = function () {
        return this.commandQueue.length > 0;
    };
    return RemoteContol;
}());
// client code
var remote = new RemoteContol();
var light = new Light();
remote.addCommand(new TurnOnCommand(light));
remote.addCommand(new TurnOffCommand(light));
remote.pressButton();
remote.pressButton();
