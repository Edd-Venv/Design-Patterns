/*
Allows you to add or provide new Operations and Methods to an Object without actually changing 
that object itself. The New Fucntionality is kept in a Separate Object known as A VISTOR OBJECT.

Uses:
Useful When Extending Some Liabary Or Framwork.

Notes:
The Object that you want to extend(Receiving Object) Must have some Kind Of Accept Method,
that takes in A Vistor Object And Provides The visitor object Access to the different information and Properties for That Object.
*/

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function() {
    return this.salary;
  },
  setSalary: function(sal) {
    this.salary = sal;
  },
  accept: function(visitorFunction) {
    visitorFunction(this);
  }
};
/////////////////////////////////////////////

const devsage = new Employee("DevSage", 10000);
console.log(devsage.getSalary());

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 2);
}

devsage.accept(ExtraSalary);
console.log(devsage.getSalary());
