const Intern = require("../lib/intern.js");

describe("getRole", () => {
    // Positive test
    it("should return 'Intern' from getRole()", () => {
      // Arrange
      const intern = new Intern("Alanna", 30, "alanna@gmail.com", "Columbia");
      // Assert
      console.log(intern);
      expect(intern.getRole()).toEqual("Intern");
    });
});

describe("getName", () => {
    // Positive test
    it("should return 'Alanna' from getName()", () => {
      // Arrange
      const intern = new Intern("Alanna", 30, "alanna@gmail.com", "Columbia");
      // Assert
      console.log(intern);
      expect(intern.getName()).toEqual("Alanna");
    });
});

describe("getID", () => {
    // Positive test
    it("should return 'Intern' from getID()", () => {
      // Arrange
      const intern = new Intern("Alanna", 30, "alanna@gmail.com", "Columbia");
      // Assert
      console.log(intern);
      expect(intern.getID()).toEqual(30);
    });
});

describe("getEmail", () => {
    // Positive test
    it("should return 'alanna@gmail.com' from getEmail()", () => {
      // Arrange
      const intern = new Intern("Alanna", 30, "alanna@gmail.com", "Columbia");
      // Assert
      console.log(intern);
      expect(intern.getEmail()).toEqual("sam@gmail.com");
    });
});

describe("getSchool", () => {
    // Positive test
    it("should return 'Columbia' from getSchool()", () => {
      // Arrange
      const intern = new Intern("Alanna", 30, "alanna@gmail.com", "Columbia");
      // Assert
      console.log(intern);
      expect(intern.getSchool()).toEqual("Columbia");
    });
});