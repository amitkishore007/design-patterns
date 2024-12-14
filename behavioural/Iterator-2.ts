// allow the developer to create an iterator instead of forcing him to work with iterator

class Employee {
    constructor(private name: string) {}
}

interface ISuccess<T> {
    item: T | null;
    done: boolean;
}

interface IEmployeeIterator<T> {
    next(): ISuccess<T>;
    hasNext(): boolean;
}

interface IEmployeeCollection<T> {
    createIterator(): IEmployeeIterator<T>;
}

// create collection of users
class EmployeeCollection implements IEmployeeCollection<Employee> {

    private employees: Employee[];

    constructor(employees: Employee[]) {
        this.employees = employees;    
    }

    getEmployees(): Employee[] {
       return this.employees;
    }

    createIterator(): EmployeeIterator {
        return new EmployeeIterator(this);
    }
}

class EmployeeIterator implements IEmployeeIterator<Employee> {
    private collection: EmployeeCollection;
    private position: number = 0;
    
    constructor(collection: EmployeeCollection) {
        this.collection  = collection
    }

    next(): ISuccess<Employee> {
       if(this.hasNext()) {
        const employees = this.collection.getEmployees();
        const employee = employees[this.position];
        this.position += 1;

        return {
            item: employee,
            done: false
        };
       }

       return {
        item: null,
        done: true
       }
    }

    hasNext(): boolean{
        return this.position < this.collection.getEmployees().length;
    }
}

// client code
const employees = [new Employee('Anna'), new Employee('John'), new Employee('Tom')];

const collection = new EmployeeCollection(employees);

const employeeIterator = collection.createIterator();

// console.log('hasNext: ',employeeIterator.hasNext());
// console.log('Employee: ',employeeIterator.next());
// console.log('Employee: ',employeeIterator.next());
// console.log('Employee: ',employeeIterator.next());
// console.log('Employee: ',employeeIterator.next());
// console.log('Employee: ',employeeIterator.next());
// console.log('hasNext: ',employeeIterator.hasNext());

while(employeeIterator.hasNext()) {
   console.log('Employee: ',employeeIterator.next());
}