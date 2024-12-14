var PaymentStrategy = /** @class */ (function () {
    function PaymentStrategy() {
        this.cartValue = 0;
    }
    PaymentStrategy.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    PaymentStrategy.prototype.updateCart = function (amount) {
        this.cartValue += amount;
    };
    PaymentStrategy.prototype.makePaymant = function () {
        this.strategy.pay(this.cartValue);
        this.cartValue = 0;
    };
    return PaymentStrategy;
}());
var PhonePe = /** @class */ (function () {
    function PhonePe() {
    }
    PhonePe.prototype.pay = function (amount) {
        console.log('Payment is being done for an amount of: ', amount, ' with the strategy: PhonePe');
    };
    return PhonePe;
}());
var GPay = /** @class */ (function () {
    function GPay() {
    }
    GPay.prototype.pay = function (amount) {
        console.log('Payment is being done for an amount of: ', amount, ' with the strategy: GPay');
    };
    return GPay;
}());
var Paypal = /** @class */ (function () {
    function Paypal() {
    }
    Paypal.prototype.pay = function (amount) {
        console.log('Payment is being done for an amount of: ', amount, ' with the strategy: Paypal');
    };
    return Paypal;
}());
var strategy = new PaymentStrategy();
// payment processor
var phonePe = new PhonePe();
var gpayPe = new GPay();
var paypal = new Paypal();
// make payment using phonepay
strategy.setStrategy(phonePe);
strategy.updateCart(100);
strategy.updateCart(50);
strategy.updateCart(200);
strategy.makePaymant();
// make a payment using gpay
strategy.setStrategy(gpayPe);
strategy.updateCart(10);
strategy.updateCart(40);
strategy.makePaymant();
