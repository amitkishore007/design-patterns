"use strict";
// interface IUser {
//     name: string;
//     email: string;
//     age: number;
// }
class Shape {
    constructor(config) {
        this.config = config;
    }
}
class Circle extends Shape {
    constructor(r, config) {
        super(config);
        this.r = r;
    }
    clone() {
        const clonnedConfig = Object.assign({}, this.config);
        return new Circle(this.r, clonnedConfig);
    }
}
class Rectangle extends Shape {
    constructor(height, width, config) {
        super(config);
        this.height = height;
        this.width = width;
    }
    clone() {
        const clonnedConfig = Object.assign({}, this.config);
        return new Rectangle(this.height, this.width, clonnedConfig);
    }
}
const circleObj = new Circle(10, { x: 0, y: 0, color: 'Red' });
console.log('CircleObj: ', circleObj);
const clonnedCircleObj = circleObj.clone();
console.log('clonnedCircleObj: ', clonnedCircleObj);
const rectangleObj = new Rectangle(10, 23, { x: 0, y: 0, color: 'Blue' });
console.log('RectangleObj: ', rectangleObj);
const clonnedRectangleObj = rectangleObj.clone();
console.log('clonnedRectangleObj: ', clonnedRectangleObj);
