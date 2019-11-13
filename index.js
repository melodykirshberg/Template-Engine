// NPM Modules
const inquirer = require("inquirer");

// Local Modules
const render = require("./lib/htmlrenderer");

// Constructors
const Manager = require("./lib/constructors/Manager");
const Engineer = require("./lib/constructors/Engineer");
const Intern = require("./lib/constructors/Intern");

// Global Variables
const teamMembers = [];
// questions to ask for manager position
const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What's the manager's name?",
  },
  {
    type: "number",
    name: "id",
    message: "What's the manager's ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What's the manager's email?",
  },
  {
    type: "number",
    name: "officeNumber",
    message: "What's the manager's office number?",
  }
];
// questions to ask for engineer position
const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What's the engineer's name?",
  },
  {
    type: "number",
    name: "id",
    message: "What's the engineer's ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What's the engineer's email?",
  },
  {
    type: "input",
    name: "gitty",
    message: "What's the engineer's GitHub username?",
  }
];
// questions to ask for intern position
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What's the intern's name?",
  },
  {
    type: "number",
    name: "id",
    message: "What's the intern's ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "What's the intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What's the intern's school?",
  }
];


async function init() {
  try {
    const response = await inquirer.prompt(managerQuestions);
    teamMembers
      .push(new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber));
    let addMember = true;
    while (addMember) {
      const answer = await inquirer.prompt({
        type: "list",
        message: "Select team member role: ",
        name: "role",
        choices: ["Engineer", "Intern", "None"]
      });

      switch (answer.role) {

        case "Engineer":
          const response = await inquirer.prompt(engineerQuestions);
          teamMembers
            .push(new Engineer(
              response.name,
              response.id,
              response.email,
              response.gitty
            ));
          break;
        case "Intern":
          const res = await inquirer.prompt(internQuestions);
          teamMembers
            .push(new Intern(
              res.name,
              res.id,
              res.email,
              res.school
            ));
          break;
        default:
          addMember = !addMember;
      }
    }
    render(teamMembers);
  } catch (err) {
    console.log(err);
  }
}
init();
