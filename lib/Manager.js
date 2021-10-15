

const Employee = require('./employee');

class Manager extends Employee {

    constructor(id, moniker, email, office) {

        super(id, moniker, email);
        this.office = office;
    }

    getOffice () {
        return this.office;
    }

 
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