"use strict";
class IShape {
}
class Circle extends IShape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Square extends IShape {
    constructor(side) {
        super();
        this.side = side;
    }
    calculateArea() {
        return this.side * this.side;
    }
}
class Rectangle extends IShape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        return this.length * this.width;
    }
}
class Shape {
    calculateArae(shape) {
        return shape.calculateArea();
    }
}
const circle = new Circle(2);
const square = new Square(4);
const rectangle = new Rectangle(10, 4);
const shapeObj = new Shape();
const areaCircle = shapeObj.calculateArae(circle);
console.log('Area of Ciecle is: ' + areaCircle);
const areaSquare = shapeObj.calculateArae(square);
console.log('Area of Square is: ' + areaSquare);
const areaRect = shapeObj.calculateArae(rectangle);
console.log('Area of Rectangle is: ' + areaRect);
