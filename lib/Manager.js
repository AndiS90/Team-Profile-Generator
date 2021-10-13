//const inquirer = require('inquirer');

const Employee = require('./employee');

class Manager extends Employee {

    constructor(id, moniker, email, office) {

        super(id, moniker, email);
        this.office = office;
    }

    getOffice () {
        return this.office;
    }

    // getOffice = function() {
    //     inquirer.prompt([{
    //      type: 'input',
    //      name: 'office',
    //      message: 'What is their office number?',
    //    }])
    //    .then((data) => this.office = data.office)
    // }

    getID(){
        super.getID();
    }

    getName() {
        super.getName();
    }

    getEmail(){
        super.getEmail();
    }


    getRole() {
        return "Manager";
    }

}

module.exports = Manager;