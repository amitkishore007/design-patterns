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
var _a, _b;
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.isValid = function () {
        return false;
    };
    Order.prototype.processPayment = function () {
        return false;
    };
    Order.prototype.ship = function () {
        console.log('Order has been shipped.');
    };
    Order.prototype.applyDiscount = function () {
        console.log('Discount Has been applied.');
    };
    return Order;
}());
var OrderAbstractHandler = /** @class */ (function () {
    function OrderAbstractHandler() {
    }
    OrderAbstractHandler.prototype.setNextHandler = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    OrderAbstractHandler.prototype.handle = function (order) {
        if (this.nextHandler) {
            return this.nextHandler.handle(order);
        }
        return null;
    };
    return OrderAbstractHandler;
}());
var ValidationHandler = /** @class */ (function (_super) {
    __extends(ValidationHandler, _super);
    function ValidationHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidationHandler.prototype.handle = function (order) {
        if (order.isValid()) {
            return _super.prototype.handle.call(this, order);
        }
        return 'Validation Failed';
    };
    return ValidationHandler;
}(OrderAbstractHandler));
var PaymentHandler = /** @class */ (function (_super) {
    __extends(PaymentHandler, _super);
    function PaymentHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentHandler.prototype.handle = function (order) {
        if (order.processPayment()) {
            return _super.prototype.handle.call(this, order);
        }
        return 'Payment Failed';
    };
    return PaymentHandler;
}(OrderAbstractHandler));
var DiscountHandler = /** @class */ (function (_super) {
    __extends(DiscountHandler, _super);
    function DiscountHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiscountHandler.prototype.handle = function (order) {
        order.applyDiscount();
        return _super.prototype.handle.call(this, order);
    };
    return DiscountHandler;
}(OrderAbstractHandler));
var ShippingHandler = /** @class */ (function (_super) {
    __extends(ShippingHandler, _super);
    function ShippingHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShippingHandler.prototype.handle = function (order) {
        order.ship();
        return null;
    };
    return ShippingHandler;
}(OrderAbstractHandler));
// client code
var order = new Order();
var validationHandler = new ValidationHandler();
var paymentHandler = new PaymentHandler();
var discountHandler = new DiscountHandler();
var shippingHandler = new ShippingHandler();
(_b = (_a = validationHandler.setNextHandler(discountHandler)) === null || _a === void 0 ? void 0 : _a.setNextHandler(paymentHandler)) === null || _b === void 0 ? void 0 : _b.setNextHandler(shippingHandler);
var orderResult = validationHandler.handle(order);
if (orderResult) {
    console.log('Order Result: ', orderResult);
}
