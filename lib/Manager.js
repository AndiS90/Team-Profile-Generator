

const Employee = require('./Employee');

class Manager extends Employee {

    constructor(id, moniker, email, office) {

        super(id, moniker, email);
        this.office = office;
    }

    getOffice () {
        return this.office;
    }

 

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;