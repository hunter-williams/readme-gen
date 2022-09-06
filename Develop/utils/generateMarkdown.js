// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //if data.liscence === "mit" return mit icon link
    // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  //if data.liscence === "isc" return isc icon link
    // [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
  
  // else " "
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // same as render icon but link to liscence not icon
    // https://opensource.org/licenses/MIT
    // https://opensource.org/licenses/ISC
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if liscence return description of what liscence the application is covered under?
  // else " "

  //THEN a badge for that license is added near the top of the README 
  //and a notice is added to the section of the README entitled License 
  //that explains which license the application is covered under               <<<<
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  - ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - []()

  ## Installation
  - ${}

`;
}

module.exports = generateMarkdown;
