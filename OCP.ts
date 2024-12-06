// without open closed principle
function discount(user) {
    if(user.type === 'premium') {
        return 10;
    } else if(user.type === 'silver') {
        return 20;
    }
}

const dicsountPercent = discount({type: 'premium'});

// With open closed principle
interface IDiscount {
    giveDiscount(): number;
}

class PremiumDiscount implements IDiscount {
    giveDiscount(): number {
        return 10;
    }
}

class GoldDiscount implements IDiscount {
    giveDiscount(): number {
        return 20;
    }
}

class NormalDiscount implements IDiscount {
    giveDiscount(): number {
        return 5;
    }
}

class Discount {
    getDiscount(discount: IDiscount) {
        return discount.giveDiscount();
    }
}

const disObj = new Discount();
disObj.getDiscount(new PremiumDiscount());
