const Teammate = require("./teammate");

class Director extends Teammate {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getPosition() {
        return "Director";
    }
    getGithub() {
        return this.github;
    }
} 

module.exports = Director;