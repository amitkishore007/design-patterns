// implement a feature to draw/brush/erase something on the canvas
    // there will be three tools SelectionTool, BrushTool, EraseTool

interface Tool {
    onMouseUp(): void;

    onMouseDown(): void;
}

class SelectionTool implements Tool {
    onMouseDown(): void {
        console.log('Selecting a rectangle form the  list of shapes....');
    }

    onMouseUp(): void {
        console.log('rectangle drown on the canvas.');
    }
}

class BrushTool implements Tool {
    onMouseDown(): void {
        console.log('Starting to draw on the canvas.');
    }

    onMouseUp(): void {
        console.log('drawing is completed using brush.');
    }
}

class EraseTool implements Tool {
    onMouseDown(): void {
        console.log('Eraser started.');
    }

    onMouseUp(): void {
        console.log('Erased.');
    }
}

class Canvas {
    constructor(private tool: Tool) {}

    setTool(tool: Tool) {
        this.tool = tool;
    }

    onMouseUp() {
        this.tool.onMouseUp();
    }

    onMouseDown() {
        this.tool.onMouseDown();
    }
}

// client code
const canvas = new Canvas(new SelectionTool());
canvas.onMouseDown();
canvas.onMouseUp();

canvas.setTool(new BrushTool());
canvas.onMouseDown();
canvas.onMouseUp();

canvas.setTool(new EraseTool());
canvas.onMouseDown();
canvas.onMouseUp();