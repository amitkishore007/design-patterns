// create a parser for parsing json and xml data

abstract class DataParser {

    public parseData() {
        const data = 'This is a dummy text';

        this.loadData();
        const parsedData = this.parse(data);
        this.validate(parsedData);
        this.useData(parsedData);
    }

    protected validate(parsedData: string) {
        console.log('Data is being validated...', parsedData);
    }

    protected loadData() {
        console.log('Data is loaded either from DB, API call etc.');
    }

    protected useData(parsedData: string) {
        console.log('Using data...', parsedData);
    }

    protected abstract parse(data: string): any; 
}

class JsonParser extends DataParser {
    protected parse(data: string): any {
        console.log('Parse the json data');

        // return JSON.parse(data);
        return data;
    }
}

class XMLParser extends DataParser {
    protected parse(data: string) {
        console.log('Parse the XML data');
        return data;
    }
}

function parser(dataParser: DataParser) {
    dataParser.parseData();
}

parser(new JsonParser());
parser(new XMLParser());