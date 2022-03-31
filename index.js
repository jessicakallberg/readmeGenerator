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
            message: 'What are the steps? you need to install your project?'
        },
        {
            type: 'input', 
            name: 'usage',
            message: 'Do you have instructions or examples for use?'
        },
        {
            type: 'input', 
            name: 'credits',
            message: 'Do you have any collaborators ?'
        },
        {
            type: 'input', 
            name: 'license',
            message: 'What kind of license does this project have'
        },
        {
            type: 'input', 
            name: 'badges',
            message: ''
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








// //write a function to start the app

// function startApp() {
//     console.log('starting app')
//     //get user feedback about readme
//     inquirer
//   .prompt([
//     /* Pass your questions in here */
//     
//   ])
//   .then((answers) => {
//     console.log(answers)
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } 
//   });
// }

// startApp();