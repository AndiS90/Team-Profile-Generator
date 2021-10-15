const manager = require("../lib/Manager");

describe("manager", () => {
    describe("Initialization", () => {
        it("should return an object containing 'id', 'moniker', 'email', and 'office' properties when called with the 'new' keyword", () => {
            const obj = new manager();

            expect("id" in obj && "moniker" in obj && "email" in obj && "office" in obj).toEqual(true);
        });

        it("should set properties when created with 4 corresponding parameters", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const ofc = "123"

            const obj = new manager(id, name, email, ofc);

            expect(obj.id && obj.moniker && obj.email && obj.office).toEqual(id && name && email && ofc);
        });

    });

    describe("getName", () => {
        it("should return the 'Manager' object's 'moniker' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const ofc = "123"

            const obj = new manager(id, name, email, ofc);

            const result = obj.getName();

            expect(result).toEqual(name);
        });

    });

    describe("getEmail", () => {
        it("should return the 'Manager' object's 'email' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const ofc = "123"

            const obj = new manager(id, name, email, ofc);

            const result = obj.getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getID", () => {
        it("should return the 'Manager' object's 'id' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const ofc = "123"

            const obj = new manager(id, name, email, ofc);

            const result = obj.getID();

            expect(result).toEqual(id);
        });

    });

    describe("getOffice", () => {
        it("should return the 'Manager' object's 'office' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const ofc = "123"

            const obj = new manager(id, name, email, ofc);

            const result = obj.getOffice();

            expect(result).toEqual(ofc);
        });

    });

    describe("getRole", () => {
        it("should return the 'Manager' object's role value as 'Manager' even when no properties are set", () => {
         

            const obj = new manager();

            const result = obj.getRole();

            expect(result).toEqual("Manager");
        });

    });

});