// 2. Using call to Chain Constructors.
// Create two constructor functions. In the first constructor, use call to chain the second
// constructor, passing in arguments from the first constructor.


function Person(name){
    this.name=name;
}

function Employee(name,job){
    Person.call(this,name);
    this.job=job;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const emp=new Employee('Alice','Engineer');
console.log(emp);