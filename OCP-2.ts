// without open closed principle
function paymentProcessor(processor) {
    if(processor.type === 'upi') {
        console.log('Process the payment though UPI');
    } else if(processor.type === 'gpay') {
        console.log('Process the payment though Gpay')
    } else if(processor.type === 'credit card') {
        console.log('Process the payment though credit card')
    }
}

paymentProcessor({type: 'upi'});

// With open closed principle
interface IPaymentProcessor {
    processPayment(amount: number): void;
}

class UpiPayment implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log('Process the payment though UPI for INR.' + amount);
    }
}

class GpayPayment implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log('Process the payment though Gpay for INR.' + amount);
    }
}

class CreditCardPayment implements IPaymentProcessor {
    processPayment(amount: number): void {
        console.log('Process the payment though Credit Card for INR.' + amount);
    }
}



class PaymentProcessor {
    processPayment(processor: IPaymentProcessor, amount: number) {
        return processor.processPayment(amount);
    }
}

const processorObj = new PaymentProcessor();
processorObj.processPayment(new UpiPayment(), 100);
processorObj.processPayment(new GpayPayment(), 100);
processorObj.processPayment(new CreditCardPayment(), 100);
