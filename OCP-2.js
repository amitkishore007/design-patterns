// without open closed principle
function paymentProcessor(processor) {
    if (processor.type === 'upi') {
        console.log('Process the payment though UPI');
    }
    else if (processor.type === 'gpay') {
        console.log('Process the payment though Gpay');
    }
    else if (processor.type === 'credit card') {
        console.log('Process the payment though credit card');
    }
}
paymentProcessor({ type: 'upi' });
var UpiPayment = /** @class */ (function () {
    function UpiPayment() {
    }
    UpiPayment.prototype.processPayment = function (amount) {
        console.log('Process the payment though UPI for INR.' + amount);
    };
    return UpiPayment;
}());
var GpayPayment = /** @class */ (function () {
    function GpayPayment() {
    }
    GpayPayment.prototype.processPayment = function (amount) {
        console.log('Process the payment though Gpay for INR.' + amount);
    };
    return GpayPayment;
}());
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
    }
    CreditCardPayment.prototype.processPayment = function (amount) {
        console.log('Process the payment though Credit Card for INR.' + amount);
    };
    return CreditCardPayment;
}());
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
    }
    PaymentProcessor.prototype.processPayment = function (processor, amount) {
        return processor.processPayment(amount);
    };
    return PaymentProcessor;
}());
var processorObj = new PaymentProcessor();
processorObj.processPayment(new UpiPayment(), 100);
processorObj.processPayment(new GpayPayment(), 100);
processorObj.processPayment(new CreditCardPayment(), 100);
