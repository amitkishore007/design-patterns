interface IProduct {
    setPart(part: string): void;

    listParts(): void;
}

interface IBuilder {
    setPartA(): void;
    setPartB(): void;
    setPartC(): void;
}

interface IDirector {
    createMinimalProduct(): void;
    createFullProduct(): void;
    createMidProduct(): void;
}

class Product implements IProduct {
    private parts: string[] = [];

    setPart(part: string) {
        this.parts.push(part);
    }

    listParts(): void {
        console.log('Product parts are: ' + this.parts.join(', '));
    }
}

class ConcreteBuilder implements IBuilder {
    private product: IProduct;

    constructor() {
       this.reset();
    }

    reset() {
        this.product = new Product();
    }

    setPartA() {
        this.product.setPart('PartA');
    }

    setPartB() {
        this.product.setPart('PartB');
    }

    setPartC() {
        this.product.setPart('PartC');
    }

    getProduct(): IProduct {
        const product1 = this.product;
        this.reset();
        return product1;
    }
}

class Director implements IDirector {
    private concreteBuilder: IBuilder;

    constructor(builder: IBuilder) {
        this.concreteBuilder = builder;
    }

    createMinimalProduct() {
        this.concreteBuilder.setPartA();
    }

    createFullProduct() {
        this.concreteBuilder.setPartA();
        this.concreteBuilder.setPartB();
        this.concreteBuilder.setPartC();
    }

    createMidProduct() {
        this.concreteBuilder.setPartA();
        this.concreteBuilder.setPartB();
    }
}

// client code

const builder = new ConcreteBuilder();

const director = new Director(builder);

director.createMinimalProduct();
builder.getProduct().listParts();

director.createFullProduct();
builder.getProduct().listParts();

director.createMidProduct();
builder.getProduct().listParts();