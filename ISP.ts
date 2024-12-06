//  interface Machine {
//     print(document: any): void;

//     fax(document: any): void;

//     scan(document: any): void;
//  }

interface IPrinter {
    print(document: any): void;
}

interface IScanner {
    scan(document: any): void;
}

interface IFaxMachine {
    fax(document: any): void;
}

class Printer implements IPrinter {
    print(document: any): void {
        console.log('Printing Document from Printer ..... ');
    }
}

class AdvancedPrinter implements IPrinter, IScanner {
    print(document: any): void {
        console.log('Printing Document from Advanced Printer ..... ');
    }

    scan(document: any): void {
        console.log('Scanning Document from Advanced Printer ..... ');
    }
}

class FaxMachine implements IFaxMachine {
    fax(document: any): void {
        console.log('Faxing Document from Fax Machine ..... ');
    }
}

const printer = new Printer();
const advancedPrinter = new AdvancedPrinter();
const faxMachine = new FaxMachine();


printer.print({});

advancedPrinter.print({});

faxMachine.fax({});