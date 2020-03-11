/*
Use Cases:
1) When A Null Object Is Being Returned.
Usually Used With User Accounts.
2) When An Image or Video isn't in The DataBase You can return a NullObject,
with a default image or video. 
 */

//IMPLEMENTATION 1 Of A User System

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.hasAccess;
  }
  hasAccess() {
    return this.name === "Bob";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
    this.hasAccess;
  }
  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  const user = users.find(user => user.id === id);
  if (user == null) {
    return new NullUser();
  } else {
    return user;
  }
}

function printUser(id) {
  const user = getUser(id);
  console.log("Hello " + user.name);

  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}
printUser(3);
