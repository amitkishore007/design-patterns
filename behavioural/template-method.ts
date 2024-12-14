abstract class BakeCake {
    public bake(): void {
        console.log('Starting Baking a cake...');
        this.preBake();
        this.heatOven();
        this.mixIngredients();
        this.decorate();
        console.log('Cake is ready...');
    }

    protected preBake(): void {
        console.log('Pre baking the breads for the cake...');
    }

    protected heatOven(): void {
        console.log('Heating oven to 98 degree C...');
    }

    protected decorate(): void {
        console.log('Decorating the cake...');
    }

    protected abstract mixIngredients(): void;
}


class ChocolateCake extends BakeCake {
    protected mixIngredients(): void {
        console.log('Mixing: Chocolate, eggs, surgar.');
    }

    protected decorate(): void {
            console.log('Decorating cake with Chocolates.');
    }
}

class VanilaCake extends BakeCake {
    protected mixIngredients(): void {
        console.log('Mixing: Vanila, eggs, surgar.');
    }
}

// client code

function prepareCake(cake: BakeCake) {
    cake.bake();
}

// prepare a chocolate cake
prepareCake(new ChocolateCake());

// prepare a vanila cake
prepareCake(new VanilaCake());