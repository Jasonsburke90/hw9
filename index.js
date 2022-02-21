// TODO: Include packages needed for this application
// inquirer for prompts
const inquirer = require("inquirer");
// fs for file writing
const fs = require("fs");
// require generateMarkdown
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Include any steps required for installation here",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use ",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "Provide instructions for having other developers contribute to your project here",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide descriptions and examples of how to run your tests here",
  },
  {
    type: "input",
    name: "githubName",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "emailAddress",
    message:
      "What is your email address in case anyone wishes to contact you with questions about your project?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  // initialize inquirer prompts
  inquirer.prompt(questions).then(
    (response) => {
      console.log(response);
      const markdown = generateMarkdown(response);
      console.log(markdown);
    }

    // send inquirer responses to generateMarkdown.js file
  );
}

// Function call to initialize app
init();
