abstract class Car {
    model: string;
    productionYear: string;

    constructor(model: string, productionYear: string) {
        this.model = model;
        this.productionYear = productionYear;
    }

    abstract getCarDetails(): void;
}

class Sedan extends Car {
    getCarDetails(): void {
        console.log(`This is a sedan. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class SUV extends Car {
    getCarDetails(): void {
        console.log(`This is a SUV. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class Hatchback extends Car {
    getCarDetails(): void {
        console.log(`This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class CarFactory {
    createCar(type: string, model: string, productionYear: string): Car {
        switch (type) {
            case 'sedan': return new Sedan(model, productionYear);
            case 'suv': return new SUV(model, productionYear);
            case 'hatchback': return new Hatchback(model, productionYear);
            default: throw new Error('Invalid car type');
        }
    }
}

const factoryObj: CarFactory = new CarFactory();
const sedan: Sedan = factoryObj.createCar('sedan', 'S101', '2019');
sedan.getCarDetails();

const suv: SUV = factoryObj.createCar('suv', 'SU0001', '2023');
suv.getCarDetails();

const hactback: Hatchback = factoryObj.createCar('hatchback', 'HB10101', '2024');
hactback.getCarDetails();