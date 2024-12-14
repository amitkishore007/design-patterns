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

interface Button {
    render(): void;

    onClick(f: Function): void;
}

interface Checkbox {
    render(): void;

    toggle(): void;
}

interface GUIFactory {
    createButton(): Button;
    createCheckbox(button: Button): Checkbox;
}


class WindowsButton implements Button {
    render() {
        console.log('Render a button in Windows Style.');
    }

    onClick(f: Function) {
        console.log('Windows style button was clicked.');
        f();
    }
}

class WindowsCheckbox implements Checkbox {
    button: Button;
    constructor(button: Button) {
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

class MacOSButton implements Button {
    render() {
        console.log('Render a button in MacOS Style.');
    }

    onClick(f: Function) {
        console.log('MacOS style button was clicked.');
        f();
    }
}

class MacOSCheckbox implements Checkbox {
    button: Button;
    constructor(button: Button) {
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

class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }

    createCheckbox(button: Button) {
        return new WindowsCheckbox(button);
    }
}

class MacOSFactory implements GUIFactory {
    createButton(): Button {
        return new MacOSButton();
    }

    createCheckbox(button: Button): Checkbox {
        return new MacOSCheckbox(button);
    }
}


class GUI {
    renderGUI(factory: GUIFactory) {
        const button: Button = factory.createButton();
        const checkbox: Checkbox = factory.createCheckbox(button);

        button.render();
        checkbox.render();
        button.onClick(() => console.log('Button is clicked!'));
        checkbox.toggle();
    }
}

const gui = new GUI();
const winFactory: WindowsFactory = new WindowsFactory();
const macOSFactory: MacOSFactory = new MacOSFactory();


gui.renderGUI(winFactory);
gui.renderGUI(macOSFactory);




