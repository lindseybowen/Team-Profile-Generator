const Manager = require("../lib/manager.js");

describe("getRole", () => {
    // Positive test
    it("should return 'Manager' from getRole()", () => {
      // Arrange
      const manager = new Manager("Alanna", 30, "alanna@gmail.com", 625);
      // Assert
      console.log(manager);
      expect(manager.getRole()).toEqual("Manager");
    });
});

describe("getName", () => {
    // Positive test
    it("should return 'Alanna' from getName()", () => {
      // Arrange
      const manager = new Manager("Alanna", 30, "alanna@gmail.com", 625);
      // Assert
      console.log(manager);
      expect(manager.getName()).toEqual("Alanna");
    });
});

describe("getID", () => {
    // Positive test
    it("should return 30 from getID()", () => {
      // Arrange
      const manager = new Manager("Alanna", 30, "alanna@gmail.com", 625);
      // Assert
      console.log(manager);
      expect(manager.getID()).toEqual(30);
    });
});

describe("getEmail", () => {
    // Positive test
    it("should return 'alanna@gmail.com' from getEmail()", () => {
      // Arrange
      const manager = new Manager("Alanna", 30, "alanna@gmail.com", 625);
      // Assert
      console.log(manager);
      expect(manager.getEmail()).toEqual("alanna@gmail.com");
    });
});

describe("getNumber", () => {
    // Positive test
    it("should return 625 from getNumber()", () => {
      // Arrange
      const manager = new Manager("Alanna", 30, "alanna@gmail.com", 625);
      // Assert
      console.log(manager);
      expect(manager.getNumber()).toEqual(625);
    });
});