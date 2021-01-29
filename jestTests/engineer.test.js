const Engineer = require("../lib/engineer.js");

describe("getRole", () => {
    // Positive test
    it("should return 'Engineer' from getRole()", () => {
      // Arrange
      const engineer = new Engineer("Alanna", 30, "alanna@gmail.com", "alannasmith");
      // Assert
      console.log(engineer);
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });

  describe("getName", () => {
    // Positive test
    it("should return 'Alanna' from getName()", () => {
      // Arrange
      const engineer = new Engineer("Alanna", 30, "alanna@gmail.com", "alannasmith");
      // Assert
      console.log(engineer);
      expect(engineer.getName()).toEqual("Alanna");
    });
});

describe("getID", () => {
    // Positive test
    it("should return 43 from getID()", () => {
      // Arrange
      const engineer = new Engineer("Alanna", 30, "alanna@gmail.com", "alannasmith");
      // Assert
      console.log(engineer);
      expect(engineer.getID()).toEqual(30);
    });
});

describe("getEmail", () => {
    // Positive test
    it("should return 'alanna@gmail.com' from getEmail()", () => {
      // Arrange
      const engineer = new Engineer("alanna", 30, "alanna@gmail.com", "alannasmith");
      // Assert
      console.log(engineer);
      expect(engineer.getEmail()).toEqual("alanna@gmail.com");
    });
});

describe("getGithub", () => {
    // Positive test
    it("should return 'alannasmith' from getGithub()", () => {
      // Arrange
      const engineer = new Engineer("Alanna", 30, "Alanna@gmail.com", "Alannasmith");
      // Assert
      console.log(engineer);
      expect(engineer.getGithub()).toEqual("Alannasmith");
    });
});