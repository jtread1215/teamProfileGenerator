const Teammate = require("./Teammate");

class Prospect extends Teammate {
    constructor(name, id, email, education) {
        super(name, id, email);
        this.education = education;
    }
    getPosition() {
        return "Prospect";
    }
    getEducation() {
        return this.education;
    }
} 

module.exports = Prospect;