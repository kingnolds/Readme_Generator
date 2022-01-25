// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What steps are required to install this project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Describe how this is project is used and examples',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed to this project, and list tutorials followed or third-party assets used',
        name: 'credits',
    },
    {
        type: 'list',
        message: 'Do you want to add a License?',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC', 'None']
    },
    // {
    //     type: 'list',
    //     message: 'Do you want to add the Contributor Covenant?',
    //     name: 'contribute',
    //     choices: ['Yes', 'No']
    // },
    // {
    //     type: 'input',
    //     message: 'Write any tests for your project.',
    //     name: 'test',
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) => err ? console.error(err) : console.log('Input Logged'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt (questions)
    .then ((data) => {
       writeToFile('generated-README', data)
    })
    
}

// Function call to initialize app
init();
