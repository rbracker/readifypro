const fs = require('fs');
const inquirer = require('inquirer');

// Questions for the user
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project:',
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?',
  },
  {
    type: 'input',
    name: 'problemSolved',
    message: 'What problem does it solve?',
  },
  {
    type: 'input',
    name: 'whatLearned',
    message: 'What did you learn?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed:',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles:',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license do you want to use? (Provide a link if applicable):',
  },
];

// Function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
}

// Function to initialize the application
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate the README content based on user input
    const readmeContent = `
# ${answers.projectTitle}

## Description

${answers.description}

## Motivation

${answers.motivation}

## Problem Solved

${answers.problemSolved}

## What I Learned

${answers.whatLearned}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Credits

${answers.credits}

## License

${answers.license}

---

🏆 Additional Sections (if applicable)

...

`;

    // Write the README file
    writeToFile('README.md', readmeContent);
  });
}

// Run the application
init();
