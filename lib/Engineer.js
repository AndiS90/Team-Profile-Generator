//const inquirer = require('inquirer');
const Employee = require('./employee');

class Engineer extends Employee {

    constructor(id, moniker, email, github){
        
        super(id, moniker, email);
        this.github = github;
    }

    getGithub() {    
        
        return this.github;
    //     inquirer.prompt([{
    //      type: 'input',
    //      name: 'github',
    //      message: 'What is their GitHub Username? (case matters):',
    //    }])
    //    .then((data) => this.github = data.github)
    }

    getID(){
        super.getID();
    }

    getName(){
        super.getName();
    }

    getEmail(){
        super.getEmail();
    }

    getRole() {
        return "Engineer";
    }
   
}

module.exports = Engineer;