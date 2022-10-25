// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your project in a few sentences. What was your motivation? Did you run into any problems?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What instructions do you have for using your application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contributing guidelines for other developers?',
        name: 'contribute',
    },
    {
        type: 'list',
        message: 'What type of license does your application require?',
        choices: ['None', 'Mozilla Public License 2.0', 'Apache License 2.0', 'GNU General Public License v3.0', 
        'GNU Affero General Public License v3.0', 'GNU Generial Public License v2.0', 'GNU Lesser General Public License v2.1', 
        'Eclipse Public License 2.0', 'MIT License', 'Boost Software License 1.0', 'BSD 2-Clause Simplified License', 
        'BSD 3-Clause "New" or "Revised License', 'Creative Commons Zero v1.0 Universal', 'The Unlicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What tests can be run on your application?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}.md`, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('README has been created!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
    .then(function(answer) {
        const fileName = 'README'

        writeToFile(fileName, answer);
    });
}

// Function call to initialize app
init();