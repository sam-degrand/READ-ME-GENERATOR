// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function generateREADME(answers, licenseBadge, licenseNotice) {
    const readmeTemplate = fs.readFileSync('README_template.md', 'utf8');
  
    // Replace placeholders in the template with user input
    let readmeContent = readmeTemplate
      .replace('<project_title>', answers.projectTitle)
      .replace('<description>', answers.description)
      .replace('<installation>', answers.installation)
      .replace('<usage>', answers.usage)
      .replace('<license_badge>', licenseBadge)
      .replace('<license_notice>', licenseNotice)
      .replace('<contributing>', answers.contributing)
      .replace('<tests>', answers.tests)
      .replace('<github_username>', answers.githubUsername)
      .replace('<email_address>', answers.emailAddress);
  
    return readmeContent;
  }
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
