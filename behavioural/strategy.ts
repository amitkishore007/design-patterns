interface PaymentStrategy {
    pay(amount: number): void;
}

class ShoppingCart {
    private strategy!: PaymentStrategy;
    cartValue: number = 0;
    
    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    updateCart(amount: number) {
        this.cartValue += amount;
    }

    makePaymant() {
       this.strategy.pay(this.cartValue);
       this.cartValue = 0;
    }
}

class PhonePe implements PaymentStrategy {
    pay(amount: number): void {
        console.log('Payment is being done for an amount of: ', amount, ' with the strategy: PhonePe');
    }
}

class GPay implements PaymentStrategy {
    pay(amount: number): void {
        console.log('Payment is being done for an amount of: ', amount, ' with the strategy: GPay');
    }
}

class Paypal implements PaymentStrategy {
    pay(amount: number): void {
        console.log('Payment is being done for an amount of: ', amount, ' with the strategy: Paypal');
    }
}

const cart = new ShoppingCart();

// payment processor
const phonePe = new PhonePe();
const gpayPe = new GPay();
const paypal = new Paypal();

// make payment using phonepay
cart.setStrategy(phonePe);
cart.updateCart(100);
cart.updateCart(50);
cart.updateCart(200);

cart.makePaymant();

// make a payment using gpay
cart.setStrategy(gpayPe);
cart.updateCart(10);
cart.updateCart(40);

cart.makePaymant();

