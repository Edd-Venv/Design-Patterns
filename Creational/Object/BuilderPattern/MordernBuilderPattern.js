/*
UseFul When You Need To Create Objects That Have Many InterLinking Parts Or Many Optional Or Required Fields.
In Other Words Useful When You Need Many Different Wordking Parts to Create OneSingle.

PROS OVER TRADITIONAL BUILDERPATTERN
1) Modern builder is really useful when you want optional values with a default value.

Used When You Have A Simple Builder.

*/

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(
    name,
    { age = 10, height, phone = "123-456-7890", address } = {}
  ) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User("Bob", {
  age: 20,
  address: new Address("12345", "Main St.")
});
console.log(user);
