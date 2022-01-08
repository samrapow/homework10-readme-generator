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
