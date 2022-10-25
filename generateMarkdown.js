// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'None') {
      return 'None';
  
    }
    return `![License Badge](https://img.shields.io/badge/license-${license.replaceAll(' ', '')}-blue)`;
  }
  
  // // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
  if (license === 'None') {
  return '';
  }
  return `[${license}](https://opensource.org/licenses/${license.replaceAll(' ', '-')})`;
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === 'None') {
      return `
  ## License
  This project does not have a license.
  `
    } else {
      return `
  ## License
  This project was created using the ${renderLicenseLink(license)} license.
  `
    }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
  
    ${renderLicenseBadge(data.license)}
  
    ## Description
  
    ${data.description}
  
    ## Table of Contents 
  
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
  
    ${data.installation}
  
    ## Usage
  
    ${data.usage}
  
    ${renderLicenseSection(data.license)}
  
    ## Contribution
  
    ${data.contribute}
  
    ## Tests
  
    ${data.test}
  
    ## Questions

    If you have any questions please use my information below to contact me. 
    * GitHub: [${data.github}](https://github.com/${data.github})
    * E-mail: ${data.email}
    `
}

module.exports = generateMarkdown;