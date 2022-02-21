// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("I am in the markdown and got called");
  console.log(data);
  return `# ${data.title}
  
## Description
${data.description}

## Installation Instructions
${data.installation}

## Instructions and Examples for Use
${data.usage}

## Contribution
*If you would like to contribute to this project, here are instructions for doing so.
${data.contribution}

## Tests
*Tests used in development and how to run them
${data.tests}

## License 
// add license

## Questions
For any questions contact me at the info below.
github.com/${data.githubName}
Or reach me via email at:
${data.emailAddress}
$
`;
}

module.exports = generateMarkdown;
