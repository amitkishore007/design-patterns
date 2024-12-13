"use strict";
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
class UpiPayment {
    processPayment(amount) {
        console.log('Process the payment though UPI for INR.' + amount);
    }
}
class GpayPayment {
    processPayment(amount) {
        console.log('Process the payment though Gpay for INR.' + amount);
    }
}
class CreditCardPayment {
    processPayment(amount) {
        console.log('Process the payment though Credit Card for INR.' + amount);
    }
}
class PaymentProcessor {
    processPayment(processor, amount) {
        return processor.processPayment(amount);
    }
}
const processorObj = new PaymentProcessor();
processorObj.processPayment(new UpiPayment(), 100);
processorObj.processPayment(new GpayPayment(), 100);
processorObj.processPayment(new CreditCardPayment(), 100);
