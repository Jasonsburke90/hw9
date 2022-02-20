// TODO: Include packages needed for this application
// inquirer for prompts
const inquirer = require("inquirer");
// fs for file writing
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
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
      message:
        "Provide descriptions and examples of how to run your tests here",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
