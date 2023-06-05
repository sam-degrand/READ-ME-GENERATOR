// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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
// Prompt the user for project information
inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: "Enter the project's title:",
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of the project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: "Enter your GitHub username:",
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: "Enter your email address:",
    },
  ])