// interface IUser {
//     name: string;
//     email: string;
//     age: number;
// }

// interface Prototype {
//     clone(): Prototype;
// }

// class ConcretePrototype implements Prototype {
//     private user: IUser;

//     constructor(user: IUser) {
//         this.user = user;
//     }

//     clone(): ConcretePrototype {
//         const clone = Object.create(this);

//         clone.user = {...this.user};

//         return clone;
//     }

//     getUser(): IUser {
//         return this.user;
//     }
// }

// const concreteObj = new ConcretePrototype( { name:"Amit", email: "amit.kishore@gmail.com", age: 30  });
// const concreteObj2 = concreteObj.clone();

// console.log(concreteObj.getUser());
// console.log(concreteObj2.getUser());
// console.log(concreteObj === concreteObj2);


/* Real World Example */

interface IConfig {
    x: number;
    y: number;
    color: string;
}

abstract class Shape {
    config: IConfig;

    constructor(config: IConfig) {
        this.config = config;
    }

    abstract clone(): Shape;
}

class Circle extends Shape {
    r: number

    constructor(r: number, config: any) {
        super(config);

        this.r = r;
    }


    clone(): Circle {
        const clonnedConfig = { ...this.config };
       
        return new Circle(this.r, clonnedConfig);
    }
}


class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number, config: IConfig) {
        super(config);
        
        this.height = height;
        this.width = width;
    }

    clone(): Rectangle {
        const clonnedConfig = { ...this.config }

        return new Rectangle(this.height, this.width, clonnedConfig);
    }
}


const circleObj: Circle = new Circle(10, { x: 0, y: 0, color: 'Red' });
console.log('CircleObj: ', circleObj);

const clonnedCircleObj: Circle = circleObj.clone();
console.log('clonnedCircleObj: ', clonnedCircleObj);

const rectangleObj: Rectangle = new Rectangle(10, 23, { x: 0, y: 0, color: 'Blue' });
console.log('RectangleObj: ', rectangleObj);

const clonnedRectangleObj: Rectangle = rectangleObj.clone();
console.log('clonnedRectangleObj: ', clonnedRectangleObj);


