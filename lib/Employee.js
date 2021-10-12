class Employee {
    constructor(id, moniker, email) {
      this.id = id;
      this.moniker = moniker;
      this.email = email;
    }
  
   getName() { 
       return this.moniker;
    }

    getID() {
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole() {
        return "Employee";
    }


  }
  
  module.exports = Employee;