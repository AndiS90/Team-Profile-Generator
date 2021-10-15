const Employee = require('./employee');

class Intern extends Employee {

    constructor(id, moniker, email, school) {

        super(id, moniker, email);
        this.school = school;
    }

    getSchool() {

        return this.school;

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
        return "Intern";
    }

}

module.exports = Intern;