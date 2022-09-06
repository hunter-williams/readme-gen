// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// import helper functions from file generateMarkdown


// TODO: Create an array of questions for user input
const questions = [
    {
        name:  'title',
        type: 'input',
        message: 'What is the tile of your project?'
    },
    {
        name:  'description',
        type: 'input',
        message: 'What is the description of your project?'
    },
    {
        name:  'install',
        type: 'input',
        message: 'What are the installation instructions?'
    },
    {
        name:  'usage',
        type: 'input',
        message: 'What are the instruction for your project and an example of its use?'
    },
    {
        name:  'license',
        type: 'checkbox',
        message: 'What license is the project covered under',
        choices: ['MIT','ISC','N/A']
    },
    {
        name:  'contribution',
        type: 'input',
        message: 'What are the contribution guidelines'
    },
    {
        name:  'test',
        type: 'input',
        message: 'How do you test this code?'
    },
    {
        name:  'github',
        type: 'input',
        message: 'What is your github?'
    },
    {
        name:  'email',
        type: 'input',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    // send answers(data) to generate markdown to format as readme.md
    fs.writeFile(fileName, generateMarkdown(data), (error, data) => {
        console.log("WriteToFile() error",  error);
        console.log("WriteToFile() data",  data);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)              // user answers all the questions
    .then((answers) => {                 // then handle answers
        writeToFile("genREADME.md", answers)   // answers get sent to generatemarkdown ^^^ and formateed into a readme
    })
}

// Function call to initialize app
init();
