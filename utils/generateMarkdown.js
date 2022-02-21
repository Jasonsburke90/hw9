var license = [];
var licenseBadge = "";
var licenseLink = "";
var licenseSection = "";
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "None") {
    licenseBadge = "";
  } else
    licenseBadge = `https://img.shields.io/badge/${license}-License#3A%20${license}-orange`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "None") {
    licenseLink = "";
  } else licenseLink = `https://choosealicense.com/licenses/${license}/`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === "None") {
    licenseSection = "";
  } else
    licenseSection = `## License 
    This application is covered under ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  license += data.license;
  renderLicenseBadge(data.license);
  renderLicenseLink(data.license);
  renderLicenseSection(data.license);
  return `# ${data.title}

![badge](${licenseBadge})

## Table of Contents

 - [Description](#description)
 - [Installation](#installation)
 - [Instructions](#instructions)
 - [Contribution](#contribution)
 - [Tests](#tests)
 - [License](#license)
 - [Questions](#questions)
 
  
## Description
${data.description}

## Installation Instructions
${data.installation}

## Instructions and Examples for Use
${data.usage}

## Contribution
*If you would like to contribute to this project, here are instructions for doing so.*
${data.contribution}

## Tests
*Tests used in development and how to run them*
${data.tests}

${licenseSection}
${licenseLink}


## Questions
For any questions contact me at the info below.
https://github.com/${data.githubName}
Or reach me via email at:
${data.emailAddress}
`;
}

module.exports = generateMarkdown;
