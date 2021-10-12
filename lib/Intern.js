const inquirer = require('inquirer');

const Employee = require('./Employee');

class Intern extends Employee {

    constructor(id, moniker, email, school) {

        super(id, moniker, email);
        this.school = school;
    }

    getSchool() {
        return  inquirer
        .prompt([{
         type: 'input',
         name: 'school',
         message: 'Where did they go to school?',
       }])
       .then((data) => this.school = data.school)
    }

    getRole() {
        return "Intern";
    }

}

module.exports = Intern;