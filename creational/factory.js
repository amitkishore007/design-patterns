"use strict";
class Car {
    constructor(model, productionYear) {
        this.model = model;
        this.productionYear = productionYear;
    }
}
class Sedan extends Car {
    getCarDetails() {
        console.log(`This is a sedan. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}
class SUV extends Car {
    getCarDetails() {
        console.log(`This is a SUV. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}
class Hatchback extends Car {
    getCarDetails() {
        console.log(`This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}
class CarFactory {
    createCar(type, model, productionYear) {
        switch (type) {
            case 'sedan': return new Sedan(model, productionYear);
            case 'suv': return new SUV(model, productionYear);
            case 'hatchback': return new Hatchback(model, productionYear);
            default: throw new Error('Invalid car type');
        }
    }
}
const factoryObj = new CarFactory();
const sedan = factoryObj.createCar('sedan', 'S101', '2019');
sedan.getCarDetails();
const suv = factoryObj.createCar('suv', 'SU0001', '2023');
suv.getCarDetails();
const hactback = factoryObj.createCar('hatchback', 'HB10101', '2024');
hactback.getCarDetails();
