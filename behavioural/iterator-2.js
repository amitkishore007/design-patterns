// allow the developer to create an iterator instead of forcing him to work with iterator
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    return Employee;
}());
// create collection of users
var EmployeeCollection = /** @class */ (function () {
    function EmployeeCollection(employees) {
        this.employees = employees;
    }
    EmployeeCollection.prototype.getEmployees = function () {
        return this.employees;
    };
    EmployeeCollection.prototype.createIterator = function () {
        return new EmployeeIterator(this);
    };
    return EmployeeCollection;
}());
var EmployeeIterator = /** @class */ (function () {
    function EmployeeIterator(collection) {
        this.position = 0;
        this.collection = collection;
    }
    EmployeeIterator.prototype.next = function () {
        if (this.hasNext()) {
            var employees_1 = this.collection.getEmployees();
            var employee = employees_1[this.position];
            this.position += 1;
            return {
                item: employee,
                done: false
            };
        }
        return {
            item: null,
            done: true
        };
    };
    EmployeeIterator.prototype.hasNext = function () {
        if (this.position < this.collection.getEmployees().length) {
            return true;
        }
        return false;
    };
    return EmployeeIterator;
}());
// client code
var employees = [new Employee('Anna'), new Employee('John'), new Employee('Tom')];
var collection = new EmployeeCollection(employees);
var employeeIterator = collection.createIterator();
// console.log('hasNext: ',employeeIterator.hasNext());
// console.log('Employee: ',employeeIterator.next());
// console.log('Employee: ',employeeIterator.next());
// console.log('Employee: ',employeeIterator.next());
// console.log('Employee: ',employeeIterator.next());
// console.log('Employee: ',employeeIterator.next());
// console.log('hasNext: ',employeeIterator.hasNext());
while (employeeIterator.hasNext()) {
    console.log('Employee: ', employeeIterator.next());
}
