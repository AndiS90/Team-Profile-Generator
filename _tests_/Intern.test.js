const intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing 'id', 'moniker', 'email', and 'school' properties when called with the 'new' keyword", () => {
            const obj = new intern();


            expect("id" in obj && "moniker" in obj && "email" in obj && "school" in obj).toEqual(true);
        });

        it("should set properties when created with 4 corresponding parameters", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const sch = "SMU"

            const obj = new intern(id, name, email, sch);

            

            expect(obj.id && obj.moniker && obj.email && obj.school).toEqual(id && name && email && sch);
        });

    });

    describe("getName", () => {
        it("should return the 'Intern' object's 'moniker' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const sch = "SMU"

            const obj = new intern(id, name, email, sch);

            const result = obj.getName();

            expect(result).toEqual(name);
        });

    });

    describe("getEmail", () => {
        it("should return the 'Intern' object's 'email' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const sch = "SMU"

            const obj = new intern(id, name, email, sch);

            const result = obj.getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getID", () => {
        it("should return the 'Intern' object's 'id' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const sch = "SMU"

            const obj = new intern(id, name, email, sch);

            const result = obj.getID();

            expect(result).toEqual(id);
        });

    });

    describe("getSchool", () => {
        it("should return the 'intern' object's 'school' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const sch = "SMU"

            const obj = new intern(id, name, email, sch);

            const result = obj.getSchool();

            expect(result).toEqual(sch);
        });

    });

    describe("getRole", () => {
        it("should return the 'Intern' object's role value as 'Intern' even when no properties are set", () => {
         

            const obj = new intern();

            const result = obj.getRole();

            expect(result).toEqual("Intern");
        });

    });

});