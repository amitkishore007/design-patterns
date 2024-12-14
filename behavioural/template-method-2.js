// create a parser for parsing json and xml data
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
var DataParser = /** @class */ (function () {
    function DataParser() {
    }
    DataParser.prototype.parseData = function () {
        var data = 'This is a dummy text';
        this.loadData();
        var parsedData = this.parse(data);
        this.validate(parsedData);
        this.useData(parsedData);
    };
    DataParser.prototype.validate = function (parsedData) {
        console.log('Data is being validated...', parsedData);
    };
    DataParser.prototype.loadData = function () {
        console.log('Data is loaded either from DB, API call etc.');
    };
    DataParser.prototype.useData = function (parsedData) {
        console.log('Using data...', parsedData);
    };
    return DataParser;
}());
var JsonParser = /** @class */ (function (_super) {
    __extends(JsonParser, _super);
    function JsonParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JsonParser.prototype.parse = function (data) {
        console.log('Parse the json data');
        // return JSON.parse(data);
        return data;
    };
    return JsonParser;
}(DataParser));
var XMLParser = /** @class */ (function (_super) {
    __extends(XMLParser, _super);
    function XMLParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XMLParser.prototype.parse = function (data) {
        console.log('Parse the XML data');
        return data;
    };
    return XMLParser;
}(DataParser));
function parser(dataParser) {
    dataParser.parseData();
}
parser(new JsonParser());
parser(new XMLParser());
