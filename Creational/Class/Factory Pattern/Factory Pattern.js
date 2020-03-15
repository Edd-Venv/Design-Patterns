/*
Allows All Object Creations In A Centralised Location(removing repeating "const new object" creations).

Use Ideas
Clean Way Of Creating Employees/Users And Inserting Them Into DataBase.
Helps With Tracking aswell. 
*/

// IMPlEMENTATION 1 Traditional(In This Case DataBase Is A Simple Array)

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
}

function say() {
  console.log("Hi, I am " + this.name + " and I am a " + this.type);
}

// creating objects
const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Patrick", 1));
employees.push(employeeFactory.create("John", 2));
employees.push(employeeFactory.create("Jamie", 1));
employees.push(employeeFactory.create("Taylor", 1));
employees.push(employeeFactory.create("Tim", 2));

employees.forEach(emp => {
  say.call(emp);
});

// IMPLEMENTATION 2 Modern

class BallFactory {
  constructor() {
    this.createBall = function(type) {
      let ball;
      if (type === "football" || type === "soccer") ball = new Football();
      else if (type === "basketball") ball = new Basketball();
      ball.roll = function() {
        return `The ${this._type} is rolling.`;
      };

      return ball;
    };
  }
}

class Football {
  constructor() {
    this._type = "football";
    this.kick = function() {
      return "You kicked the football.";
    };
  }
}

class Basketball {
  constructor() {
    this._type = "basketball";
    this.bounce = function() {
      return "You bounced the basketball.";
    };
  }
}

// creating objects
const factory = new BallFactory();

const myFootball = factory.createBall("football");
const myBasketball = factory.createBall("basketball");

console.log(myFootball.roll()); // The football is rolling.
console.log(myBasketball.roll()); // The basketball is rolling.
console.log(myFootball.kick()); // You kicked the football.
console.log(myBasketball.bounce()); // You bounced the basketball.
