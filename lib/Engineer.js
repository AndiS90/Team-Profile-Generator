const Employee = require('./employee');

class Engineer extends Employee {

    constructor(id, moniker, email, github){
        
        super(id, moniker, email);
        this.github = github;
    }

    getGithub() {    
        
        return this.github;
  
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