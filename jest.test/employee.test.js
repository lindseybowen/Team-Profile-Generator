const Employee = require("../lib/employee.js");

describe("getRole", () => {
    // Positive test
    it("should return 'Employee' from getRole()", () => {
      // Arrange
      const employeeValue = "Employee"
      const employee = new Employee("Alanna", 30, "alanna@gmail.com", "Employee");
      // Assert
      expect(employee.getRole()).toEqual(employeeValue);
    });
  });

  describe("getName", () => {
    // Positive test
    it("should return 'Sam' from getName()", () => {
      // Arrange
      const employee = new Employee("Alanna", 30, "alanna@gmail.com");
      // Assert
      console.log(employee);
      expect(employee.getName()).toEqual("Alanna");
    });
});

describe("getID", () => {
    // Positive test
    it("should return 30 from getID()", () => {
      // Arrange
      const employee = new Employee("Alanna", 30, "alanna@gmail.com");
      // Assert
      console.log(employee);
      expect(employee.getID()).toEqual(30);
    });
});

describe("getEmail", () => {
    // Positive test
    it("should return 'alanna@gmail.com' from getEmail()", () => {
      // Arrange
      const employee = new Employee("Alanna", 30, "alanna@gmail.com");
      // Assert
      console.log(employee);
      expect(employee.getEmail()).toEqual("alanna@gmail.com");
    });
});

describe("Employee.js", ()=> {
    it("Inputs name using the instructor",() => {
        const employee = new Employee("Alanna", 30, "alanna@gmail.com")
        expect(employee.getName()).toEqual("Alanna");
    });

    it("Inputs ID using the instructor",() => {
        const employee = new Employee("Alanna", 30, "alanna@gmail.com")
        expect(employee.getID()).toEqual(30);
    });

    it("Inputs email using the instructor",() => {
        const employee = new Employee("Alanna", 30, "alanna@gmail.com")
        expect(employee.getEmail()).toEqual("alanna@gmail.com");
    });
});