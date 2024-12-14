var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BakeCake = /** @class */ (function () {
    function BakeCake() {
    }
    BakeCake.prototype.bake = function () {
        console.log('Starting Baking a cake...');
        this.preBake();
        this.heatOven();
        this.mixIngredients();
        this.decorate();
        console.log('Cake is ready...');
    };
    BakeCake.prototype.preBake = function () {
        console.log('Pre baking the breads for the cake...');
    };
    BakeCake.prototype.heatOven = function () {
        console.log('Heating oven to 98 degree C...');
    };
    BakeCake.prototype.decorate = function () {
        console.log('Decorating the cake...');
    };
    return BakeCake;
}());
var ChocolateCake = /** @class */ (function (_super) {
    __extends(ChocolateCake, _super);
    function ChocolateCake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChocolateCake.prototype.mixIngredients = function () {
        console.log('Mixing: Chocolate, eggs, surgar.');
    };
    ChocolateCake.prototype.decorate = function () {
        console.log('Decorating cake with Chocolates.');
    };
    return ChocolateCake;
}(BakeCake));
var VanilaCake = /** @class */ (function (_super) {
    __extends(VanilaCake, _super);
    function VanilaCake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VanilaCake.prototype.mixIngredients = function () {
        console.log('Mixing: Vanila, eggs, surgar.');
    };
    return VanilaCake;
}(BakeCake));
// client code
function prepareCake(cake) {
    cake.bake();
}
// prepare a chocolate cake
prepareCake(new ChocolateCake());
// prepare a vanila cake
prepareCake(new VanilaCake());
