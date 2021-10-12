const inquirer = require('inquirer');

class Employee {
    constructor(id, moniker, email) {
      this.id = id;
      this.moniker = moniker;
      this.email = email;
    }
  
   getName() { 
       return  inquirer
       .prompt([{
        type: 'input',
        name: 'moniker',
        message: 'What is their name?',
      }])
      .then((data) => this.moniker = data.moniker)
        
    }

    getID() {
        return  inquirer
        .prompt([{
         type: 'input',
         name: 'id',
         message: 'What is their ID?',
       }])
       .then((data) => this.id = data.id)
    }

    getEmail(){
        return  inquirer
        .prompt([{
         type: 'input',
         name: 'email',
         message: 'What is their email?',
       }])
       .then((data) => this.email = data.email)
    }

    getRole() {
        return "Employee";
    }


  }
  
  module.exports = Employee;