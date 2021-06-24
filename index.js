const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "newTeam.html");

const render = require("./src/template.js");

const teammates = [];
const ids = [];

function appCards() {

  function genManager() {
    console.log("Lets build your team!");
    inquirer.prompt([
      {
        type: "input",
        name: "mgrName",
        message: "Who is your team manager?", 
      },
      {
        type: "input",
        name: "mgrId",
        message: "Enter your manager's ID.",
      },
      {
        type: "input",
        name: "mgrEmail",
        message: "Please enter your manager's email.",
      },
      {
         type: "input",
         name: "mgrOffNum",
         message: "What is your manager's office number?",
       }
    ]).then(answers => {
      const mgr = new Manager(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.mgrOffNum);
      teammates.push(mgr);
      ids.push(answers.mgrId);
      genTeam();
    });
  }

  function genTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "What position is your new teammate's?",
        choices: [
          "Engineer",
          "Intern",
          "Done"
        ]
      }
    ]).then(userChoice => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          genEngineer();
          break;
        case "Intern":
          genIntern();
          break;
        case "Done":
          pushTeam();
      }
    });
  }

  function genEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engName",
        message: "Please enter your new engineer's name?", 
      },
      {
        type: "input",
        name: "engId",
        message: "What is your teammate's ID?",
      },
      {
        type: "input",
        name: "engEmail",
        message: "Please enter your new engineer's email?",
      },
      {
        type: "input",
        name: "engGit",
        message: "What is your engineer's GitHub username?",
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGit);
      teammates.push(engineer);
      ids.push(answers.engId);
      genTeam();
    });
  }

  function genIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "intName",
        message: "What is your new intern's name?",
      },
      {
        type: "input",
        name: "intId",
        message: "What is your intern's ID?",
      },
      {
        type: "input",
        name: "intEmail",
        message: "Please enter your email?",
      },
      {
        type: "input",
        name: "intSchool",
        message: "What school are you attending?",
      }
    ]).then(answers => {
      const intern = new Intern(answers.intName, answers.intId, answers.intEmail, answers.intSchool);
      teammates.push(intern);
      ids.push(answers.intId);
      genTeam();
    });
  }

  function pushTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teammates), "utf-8");
  }

  genManager();

}

appCards();
