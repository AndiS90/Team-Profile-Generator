const Employee = require('./Employee');

class Manager extends Employee {

    constructor(office) {

        super(id, moniker, email);
        this.office = office;
    }

    getOffice() {

        return this.office;
    }

    getRole() {
        return "Manager";
    }

}