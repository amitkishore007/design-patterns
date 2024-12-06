//  interface Machine {
//     print(document: any): void;
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.print = function (document) {
        console.log('Printing Document from Printer ..... ');
    };
    return Printer;
}());
var AdvancedPrinter = /** @class */ (function () {
    function AdvancedPrinter() {
    }
    AdvancedPrinter.prototype.print = function (document) {
        console.log('Printing Document from Advanced Printer ..... ');
    };
    AdvancedPrinter.prototype.scan = function (document) {
        console.log('Scanning Document from Advanced Printer ..... ');
    };
    return AdvancedPrinter;
}());
var FaxMachine = /** @class */ (function () {
    function FaxMachine() {
    }
    FaxMachine.prototype.fax = function (document) {
        console.log('Faxing Document from Fax Machine ..... ');
    };
    return FaxMachine;
}());
var printer = new Printer();
var advancedPrinter = new AdvancedPrinter();
var faxMachine = new FaxMachine();
printer.print({});
advancedPrinter.print({});
faxMachine.fax({});
