//  Acting like backEnd db

function User(firstName, lastName, username, email, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullname = firstName + " " + lastName;
  this.initials = firstName.charAt(0) + lastName.charAt(0);
  this.username = username;
  this.email = email;
  this.password = password;
  this.toString =
    "Name: " +
    this.firstName +
    " " +
    this.lastName +
    "\n" +
    "Username: " +
    this.username +
    "\n" +
    "Email: " +
    this.email +
    "\n" +
    "Password: " +
    this.password;
}

let usersCollection = [];

export default usersCollection;
