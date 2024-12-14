// implement a feature to turnOn and turnOff a light
// here light state will change
var LightOn = /** @class */ (function () {
    function LightOn() {
    }
    LightOn.prototype.switchState = function (state) {
        console.log('Light was off.... turning it on.');
        // change the state to off
        state.setState(new LightOff());
    };
    return LightOn;
}());
var LightOff = /** @class */ (function () {
    function LightOff() {
    }
    LightOff.prototype.switchState = function (state) {
        console.log('Light was on....turning it off.');
        // change the state to on
        state.setState(new LightOn());
    };
    return LightOff;
}());
var SwitchLight = /** @class */ (function () {
    function SwitchLight(state) {
        this.state = state;
    }
    SwitchLight.prototype.setState = function (state) {
        this.state = state;
    };
    SwitchLight.prototype.switchLight = function () {
        this.state.switchState(this);
    };
    return SwitchLight;
}());
// client code
var switchLight = new SwitchLight(new LightOff());
switchLight.switchLight();
switchLight.switchLight();
switchLight.switchLight();
switchLight.switchLight();
