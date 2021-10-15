const Employee = require('./Employee');

class Intern extends Employee {

    constructor(id, moniker, email, school) {

        super(id, moniker, email);
        this.school = school;
    }

    getSchool() {

        return this.school;

    }



    getRole() {
        return "Intern";
    }

}

module.exports = Intern;