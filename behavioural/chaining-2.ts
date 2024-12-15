class Order {
    isValid() {
        return false;
    }

    processPayment() {
        return false;
    }

    ship() {
        console.log('Order has been shipped.');
    }

    applyDiscount() {
        console.log('Discount Has been applied.');
    }
}

interface OrderHandler {

    setNextHandler(handler: OrderHandler): OrderHandler | null;

    handle(order: Order): string | null;
}

abstract class OrderAbstractHandler implements OrderHandler {
    nextHandler!: OrderHandler | null;

    setNextHandler(handler: OrderHandler): OrderHandler | null {
        this.nextHandler = handler;

        return handler;
    }

    handle(order: Order): string | null {
        if(this.nextHandler) {
            return this.nextHandler.handle(order);
        }

        return null;
    }
}

class ValidationHandler extends OrderAbstractHandler {
    handle(order: Order): string | null {
        if(order.isValid()) {
            return super.handle(order);
        }

        return 'Validation Failed';
    }
}

class PaymentHandler extends OrderAbstractHandler {
    handle(order: Order): string | null {
        if(order.processPayment()) {
            return super.handle(order);
        }

        return 'Payment Failed';
    }
}

class DiscountHandler extends OrderAbstractHandler {
    handle(order: Order): string | null {
        order.applyDiscount();

        return super.handle(order);
    }
}

class ShippingHandler extends OrderAbstractHandler {
    handle(order: Order): string | null {
        order.ship();
        
        return null;
    }
}

// client code

const order = new Order();
const validationHandler = new ValidationHandler();
const paymentHandler = new PaymentHandler();
const discountHandler = new DiscountHandler();
const shippingHandler = new ShippingHandler(); 


validationHandler.setNextHandler(discountHandler)?.setNextHandler(paymentHandler)?.setNextHandler(shippingHandler);

const orderResult = validationHandler.handle(order);
if(orderResult) {
    console.log('Order Result: ', orderResult);
}
















































