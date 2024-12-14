"use strict";
/*
    create a UI widget library with the following featured

        create a button
        creata a checkbox
        
        the button should work in windows
        the checkbox should work in macos

        create a factory for windows
        create a factory for max os


    write the client code
*/
class WindowsButton {
    render() {
        console.log('Render a button in Windows Style.');
    }
    onClick(f) {
        console.log('Windows style button was clicked.');
        f();
    }
}
class WindowsCheckbox {
    constructor(button) {
        this.button = button;
    }
    render() {
        console.log('Render a checkbox in Windows Style.');
    }
    toggle() {
        console.log('Windows style checkbox was toggled.');
        this.button.onClick(() => console.log('Windows button was clicked to toggle the checkbox.'));
    }
}
class MacOSButton {
    render() {
        console.log('Render a button in MacOS Style.');
    }
    onClick(f) {
        console.log('MacOS style button was clicked.');
        f();
    }
}
class MacOSCheckbox {
    constructor(button) {
        this.button = button;
    }
    render() {
        console.log('Render a checkbox in MacOS Style.');
    }
    toggle() {
        console.log('MacOS style checkbox was toggled.');
        this.button.onClick(() => console.log('MacOS button was clicked to toggle the checkbox.'));
    }
}
class WindowsFactory {
    createButton() {
        return new WindowsButton();
    }
    createCheckbox(button) {
        return new WindowsCheckbox(button);
    }
}
class MacOSFactory {
    createButton() {
        return new MacOSButton();
    }
    createCheckbox(button) {
        return new MacOSCheckbox(button);
    }
}
class GUI {
    renderGUI(factory) {
        const button = factory.createButton();
        const checkbox = factory.createCheckbox(button);
        button.render();
        checkbox.render();
        button.onClick(() => console.log('Button is clicked!'));
        checkbox.toggle();
    }
}
const gui = new GUI();
const winFactory = new WindowsFactory();
const macOSFactory = new MacOSFactory();
gui.renderGUI(winFactory);
gui.renderGUI(macOSFactory);
