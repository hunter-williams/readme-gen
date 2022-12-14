// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license == 'ISC') {
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }else {
    return ' '}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT'){
    return `https://opensource.org/licenses/MIT`
  } if (license == 'ISC'){
    return `https://opensource.org/licenses/ISC`
  }else{
    return ' '
    } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'N/A'){
    return 'No License.'
  }else{
    return `License being used: ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ## Description
  - ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#testing)
  - [Questions](#question)

  ## Installation
  - ${data.install}
 
  ## Usage
  - ${data.usage}
 
  ## License
  - ${renderLicenseSection(data.license)}
  - ${renderLicenseLink(data.license)}
 
  ## Contribution
  - ${data.contribution}
 
  ## Testing
  - ${data.test}
 
  ## Questions
  - My Github Link: [${data.github}](https://github.com/${data.github})
  - To Reach Me With Further Questions: ${data.email}

`;
}

module.exports = generateMarkdown;
