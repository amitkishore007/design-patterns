"use strict";
class Product {
    constructor() {
        this.parts = [];
    }
    setPart(part) {
        this.parts.push(part);
    }
    listParts() {
        console.log('Product parts are: ' + this.parts.join(', '));
    }
}
class ConcreteBuilder {
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
    getProduct() {
        const product1 = this.product;
        this.reset();
        return product1;
    }
}
class Director {
    constructor(builder) {
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
