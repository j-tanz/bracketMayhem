
var expect = require("chai").expect;
// var disemvowel = require("./disemvowel");

function createAccount(email, pass1, pass2) {
    function getinputs() {
        inputEmail = $("#inputEmail").text().trim();
        inputPass1 = $("#inputPass1").text().trim();
        inputPass2 = $("#inputPass2").text().trim();
    }
}

function loginTo(emailInput, passInput) {

}

describe("createAccount", function () {
    it("if user inputs valid email and matching password", function () {
        expect(test("")).to.equal("a");
    });
    it("if user inputs retype password field and passwords dont match", function () {
        // expect(test("")).to.equal("a");
    });
    it("if user inputs email that already exists in the database", function () {
        // expect(test("")).to.equal("a");
    });
});

describe("loginTo", function () {
    it("if user inputs correct email and password", function () {
        expect(test("")).to.equal("a");
    });

    it("if user inputs incorrect password for associated email", function () {
        expect(test("")).to.equal("a");
    });
    it("if user inputs email password combo for an email that hasnt signed up", function () {

        expect(test("")).to.equal("a");
    });
    it("if user inputs email password combo for an email that hasnt signed up", function () {

        expect(test("")).to.equal("a");
    });
});
