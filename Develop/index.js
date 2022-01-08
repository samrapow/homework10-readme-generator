// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");


// TODO: Create an array of questions for user input
// const questions = [];
function getUserInput() {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "Please type your Github username",
                name: "username"
            },
            {
                type: "input",
                message: "Please type your email address",
                name: "email"
            },
            {
                type: "input",
                message: "What title does your project have?",
                name: "title"
            },
            {
                type: "input",
                message: "What is the description of your project?",
                name: "description"
            },
            {
                type: "input",
                message: "What packages does your project require?",
                name: "installation"
            },
            {
                type: "input",
                message: "What is your project used for?",
                name: "usage"
            },
            {
                type: "input",
                message: "Please list all contributers to your project",
                name: "contributing"
            },
            {
                type: "input",
                message: "Which command does one use to run a test of your project?",
                name: "tests"
            },
            {
                type: "list",
                message: "Which license does your project have?",
                choices: ["MIT", "Mozilla", "Intel", "none"],
                name: "license"
            }
        ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    const userInput = getUserInput();
    generateMarkdown(userInput);
}

// Function call to initialize app
init();
