function setUsername(username) {
    // Complex db calls
    this.username = username;
}

function createUser(username, email, password) {
    // setUsername(username);  // this is just a reference not a call
    setUsername.call(this, username) // to pass the context
    this.email = email;
    this.password = password;
}

const mukul = new createUser("mukul", "mukul@gmail.com", "123")

console.log(mukul);  // sirf email and password aara hai