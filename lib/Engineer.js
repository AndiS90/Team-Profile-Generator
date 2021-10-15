const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(id, moniker, email, github){
        
        super(id, moniker, email);
        this.github = github;
    }

    getGithub() {    
        
        return this.github;
  
    }

 

    getRole() {
        return "Engineer";
    }
   
}

module.exports = Engineer;