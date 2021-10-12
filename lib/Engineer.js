const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(id, moniker, email, github){
        
        super(id, moniker, email);
        this.github = github;
    }

    gitGithub() {
        
        return  inquirer
        .prompt([{
         type: 'input',
         name: 'github',
         message: 'What is their GitHub Username? (case matters):',
       }])
       .then((data) => this.github = data.github)
    }

    getRole() {
        return "Engineer";
    }
   
}

module.exports = Engineer;