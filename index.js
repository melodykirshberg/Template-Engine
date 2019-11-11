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
      type: "input",
      name: "id",
      message: "What's the manager's ID number?",
  },
  {
      type: "input",
      name: "email",
      message: "What's the manager's email?",
  },
  {
      type: "input",
      name: "officeNumber",
      message: "What's the manager's office number?",
  }
];
// questions to ask for engineer position
const engineerQuestions = [
  {
      type: "input",
      name: "name",
      message: "What's the engineers' name?",
  },
  {
      type: "input",
      name: "id",
      message: "What's the engineers' ID number?",
  },
  {
      type: "input",
      name: "email",
      message: "What's the engineers' email?",
  },
  {
      type: "input",
      name: "gitty",
      message: "What's the engineers' GitHub username?",
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
      type: "input",
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


  render(teamMembers);
}

init();
