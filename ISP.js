"use strict";
//  interface Machine {
//     print(document: any): void;
class Printer {
    print(document) {
        console.log('Printing Document from Printer ..... ');
    }
}
class AdvancedPrinter {
    print(document) {
        console.log('Printing Document from Advanced Printer ..... ');
    }
    scan(document) {
        console.log('Scanning Document from Advanced Printer ..... ');
    }
}
class FaxMachine {
    fax(document) {
        console.log('Faxing Document from Fax Machine ..... ');
    }
}
const printer = new Printer();
const advancedPrinter = new AdvancedPrinter();
const faxMachine = new FaxMachine();
printer.print({});
advancedPrinter.print({});
faxMachine.fax({});
