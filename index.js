// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
  {
            type: 'input', 
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input', 
            name: 'description',
            message: 'What is your detailed description of the project?'
        },
        {
            type: 'input', 
            name: 'installation',
            message: 'What are the steps you need to install your project?'
        },
        {
            type: 'input', 
            name: 'usage',
            message: 'Do you have instructions or examples for use?'
        },
        {
            type: 'input', 
            name: 'credits',
            message: 'Do you have any collaborators?'
        },
        {
            type: 'list', 
            name: 'license',
            choices: ["MIT" , "Boost Software License" , "Apache License 2.0", "NONE"],
            message: 'What kind of license does this project have?'
        },
        {
            type: 'input', 
            name: 'badges',
            message: 'What kind of badges does this project have? '
        },
        {
            type: 'list', 
            name: 'contribution',
            choices:["Follows Contributors Covenant 2.1 because their is more than one contributor in this project or additional contributors allowed to add", "Does not follow Contributors Covenant 2.1 as their is only a single contributor to this project, additional contributors not allowed"],
            message: 'Does this project follow the contributors covenant 2.1?'
        },
        {
            type: 'input', 
            name: 'tests',
            message: 'Do you want to provide examples of how to run tests?'
        },
        
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    console.log('starting app...');
    inquirer.prompt(questions).then((answers) => {
    console.log(answers)
      //pass the answers into the generate markdown function as the second parameter of the write to file function
        writeToFile('readme.md', generateMarkdown(answers))
    })

}

// Function call to initialize app
init();








