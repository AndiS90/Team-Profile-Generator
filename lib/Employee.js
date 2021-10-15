

class Employee {
    constructor(id, moniker, email) {
      this.id = id;
      this.moniker = moniker;
      this.email = email;
    }
  


  getName(){
    return this.moniker;
  }

  getEmail(){
    return this.email;

  }

  getID(){
    return this.id;

  }

    getRole() {
        return "Employee";
    }


  }


  
  module.exports = Employee;