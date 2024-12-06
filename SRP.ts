interface IUser {
    name: string;
    age: number;
    email: string;
}

class User implements IUser {
    name: string;
    age: number;
    email: string;
    
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}


const user: IUser = new User('Amit', 30, 'test@gmail.com');
