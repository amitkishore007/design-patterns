// implement a feature to draw/brush/erase something on the canvas
// there will be three tools SelectionTool, BrushTool, EraseTool
var SelectionTool = /** @class */ (function () {
    function SelectionTool() {
    }
    SelectionTool.prototype.onMouseDown = function () {
        console.log('Selecting a rectangle form the  list of shapes....');
    };
    SelectionTool.prototype.onMouseUp = function () {
        console.log('rectangle drown on the canvas.');
    };
    return SelectionTool;
}());
var BrushTool = /** @class */ (function () {
    function BrushTool() {
    }
    BrushTool.prototype.onMouseDown = function () {
        console.log('Starting to draw on the canvas.');
    };
    BrushTool.prototype.onMouseUp = function () {
        console.log('drawing is completed using brush.');
    };
    return BrushTool;
}());
var EraseTool = /** @class */ (function () {
    function EraseTool() {
    }
    EraseTool.prototype.onMouseDown = function () {
        console.log('Eraser started.');
    };
    EraseTool.prototype.onMouseUp = function () {
        console.log('Erased.');
    };
    return EraseTool;
}());
var Canvas = /** @class */ (function () {
    function Canvas(tool) {
        this.tool = tool;
    }
    Canvas.prototype.setTool = function (tool) {
        this.tool = tool;
    };
    Canvas.prototype.onMouseUp = function () {
        this.tool.onMouseUp();
    };
    Canvas.prototype.onMouseDown = function () {
        this.tool.onMouseDown();
    };
    return Canvas;
}());
// client code
var canvas = new Canvas(new SelectionTool());
canvas.onMouseDown();
canvas.onMouseUp();
canvas.setTool(new BrushTool());
canvas.onMouseDown();
canvas.onMouseUp();
canvas.setTool(new EraseTool());
canvas.onMouseDown();
canvas.onMouseUp();
