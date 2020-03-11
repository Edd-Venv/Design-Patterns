/*
UseFul When You Need To Create Objects That Have Many InterLinking Parts Or Many Optional Or Required Fields.
In Other Words Useful When You Need Many Different Wordking Parts to Create OneSingle.

PROS OVER MORDERN BUILDERPATTERN
1) When You A Complex Object With Many Moving Parts
*/

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(address) {
    this.user.Address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

let user = new UserBuilder("Bob")
  .setAge(10)
  .setPhone(1111)
  .build();
console.log(user);
