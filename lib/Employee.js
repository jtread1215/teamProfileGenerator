class Employee {
    
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    addTeammate() {
      return this.name;
    }
  
    addId() {
      return this.id;
    }
  
    addEmail() {
      return this.email;
    }
  
    addPosition() {
      return "Employee";
    }
  
  }
  
  module.exports = Employee;