const employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing 'id', 'moniker', and 'email' properties when called with the 'new' keyword", () => {
            const obj = new employee();

            expect("id" in obj && "moniker" in obj && "email" in obj).toEqual(true);
        });

        it("should set properties when created with 3 corresponding parameters", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";

            const obj = new employee(id, name, email);

            expect(obj.id && obj.moniker && obj.email).toEqual(id && name && email);
        });

    });

    describe("getName", () => {
        it("should return the 'Employee' object's 'moniker' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";

            const obj = new employee(id, name, email);

            const result = obj.getName();

            expect(result).toEqual(name);
        });

    });

    describe("getEmail", () => {
        it("should return the 'Employee' object's 'email' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";

            const obj = new employee(id, name, email);

            const result = obj.getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getID", () => {
        it("should return the 'Employee' object's 'id' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";

            const obj = new employee(id, name, email);

            const result = obj.getID();

            expect(result).toEqual(id);
        });

    });

    describe("getRole", () => {
        it("should return the 'Employee' object's role value as 'Employee'", () => {
         

            const obj = new employee();

            const result = obj.getRole();

            expect(result).toEqual("Employee");
        });

    });

});