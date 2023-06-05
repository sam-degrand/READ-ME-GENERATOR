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
      name: 'githubUsername',
      message: "Enter your GitHub username:",
    },
    {
      type: 'input',
      name: 'emailAddress',
      message: "Enter your email address:",
    },
  ])
  .then((answers) => {
    // Retrieve the license badge URL based on the selected license
    let licenseBadge;
    let licenseNotice;

    switch (answers.license) {
      case 'MIT':
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        licenseNotice = 'This application is covered under the [MIT License](https://opensource.org/licenses/MIT).';
        break;
      case 'Apache-2.0':
        licenseBadge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        licenseNotice = 'This application is covered under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).';
        break;
      case 'GPL-3.0':
        licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        licenseNotice = 'This application is covered under the [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0).';
        break;
      default:
        licenseBadge = '';
        licenseNotice = '';
    }

    // Generate the README content
    const readmeContent = generateREADME(answers, licenseBadge, licenseNotice);

    // Write the generated README content to a file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md successfully generated!');
      }
    });
  })