const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(github){
        
        super(id, moniker, email);
        this.github = github;
    }

    gitGithub() {

        return this.github;
    }

    getRole() {
        return "Engineer";
    }
   
}

module.exports = Engineer;