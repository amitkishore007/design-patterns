"use strict";
// interface IProductA {
//     operationA(): string;
// }
// interface IProductB {
//     operationB(): string;
// }
// interface IFactory {
//     createProductA(): ProductA;
//     createProductB(): ProductB;
// }
// class ProductA implements IProductA {
//     operationA() {
//         return 'The result of operation A';
//     }
// }
// class ProductB implements ProductB {
//     operationB(): string {
//         return 'The result of operation B';
//     }
//     combinedOpration(collarobator: IProductA): string {
//         const result = collarobator.operationA();
//         return 'The result of Product B collaboating with ' + result;
//     }
// }
// class AbstractFactory implements IFactory {
//     createProductA(): ProductA {
//         return new ProductA();
//     }
//     createProductB(): ProductB {
//         return new ProductB();
//     }
// }
// /* Client Code */
// const factoryObj1 = new AbstractFactory();
// const productA = factoryObj1.createProductA();
// const productB = factoryObj1.createProductB();
// console.log(productA.operationA());
// console.log(productB.operationB());
// console.log(productB.combinedOpration(productA));
/* Real World Use Case */
