const engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing 'id', 'moniker', 'email', and 'github' properties when called with the 'new' keyword", () => {
            const obj = new engineer();

         
            expect("id" in obj && "moniker" in obj && "email" in obj && "github" in obj).toEqual(true);
        });

        it("should set properties when created with 4 corresponding parameters", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const gh = "Username"

            const obj = new engineer(id, name, email, gh);

            expect(obj.id && obj.moniker && obj.email && obj.github).toEqual(id && name && email && gh);
        });

    });

    describe("getName", () => {
        it("should return the 'Engineer' object's 'moniker' value", () => {
            const id = 10;
            const name ="Josh";
            const email ="email@email.com";
            const gh ="Username"

            const obj = new engineer(id, name, email, gh);

            const result = obj.getName();

            expect(result).toEqual(name);
        });

    });

    describe("getEmail", () => {
        it("should return the 'Engineer' object's 'email' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const gh = "Username"

            const obj = new engineer(id, name, email, gh);

            const result = obj.getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getID", () => {
        it("should return the 'Engineer' object's 'id' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const gh = "Username"

            const obj = new engineer(id, name, email, gh);

            const result = obj.getID();

            expect(result).toEqual(id);
        });

    });

    describe("getGithub", () => {
        it("should return the 'Engineer' object's 'github' value", () => {
            const id = 10;
            const name = "Josh";
            const email = "email@email.com";
            const gh = "Username"

            const obj = new engineer(id, name, email, gh);

            const result = obj.getGithub();

            expect(result).toEqual(gh);
        });

    });

    describe("getRole", () => {
        it("should return the 'Engineer' object's role value as 'Engineer' even when no properties are set", () => {
         

            const obj = new engineer();

            const result = obj.getRole();

            expect(result).toEqual("Engineer");
        });

    });

});