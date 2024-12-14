"use strict";
// without open closed principle
function discount(user) {
    if (user.type === 'premium') {
        return 10;
    }
    else if (user.type === 'silver') {
        return 20;
    }
}
const dicsountPercent = discount({ type: 'premium' });
class PremiumDiscount {
    giveDiscount() {
        return 10;
    }
}
class GoldDiscount {
    giveDiscount() {
        return 20;
    }
}
class NormalDiscount {
    giveDiscount() {
        return 5;
    }
}
class Discount {
    getDiscount(discount) {
        return discount.giveDiscount();
    }
}
const disObj = new Discount();
disObj.getDiscount(new PremiumDiscount());
