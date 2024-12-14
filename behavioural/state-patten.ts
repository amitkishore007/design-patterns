// implement a feature to turnOn and turnOff a light
    // here light state will change

interface LightState {
    switchState(state: SwitchLight): void;
}

class LightOn implements LightState {
    switchState(state: SwitchLight): void {
        console.log('Light was off.... turning it on.');
        // change the state to off
        state.setState(new LightOff());
    }
}

class LightOff implements LightState {
    switchState(state: SwitchLight): void {
        console.log('Light was on....turning it off.');
        // change the state to on
        state.setState(new LightOn());
    }
}

class SwitchLight {
    
    constructor(private state: LightState) {}

    setState(state: LightState) {
        this.state = state;
    }

    switchLight() {
        this.state.switchState(this);
    }
}

// client code
const switchLight = new SwitchLight(new LightOff());

switchLight.switchLight();
switchLight.switchLight();

switchLight.switchLight();
switchLight.switchLight();