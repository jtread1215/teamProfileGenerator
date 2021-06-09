const Teammate = require("./teammate");

class HeadCoach extends Teammate {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    getPosition() {
        return "Head Coach";
    }
    getOffice() {
        return this.office;
    }
} 

module.exports = HeadCoach;