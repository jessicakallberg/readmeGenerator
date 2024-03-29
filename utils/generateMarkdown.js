// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
        return "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)"
    }
    else if (license === "Apache"){
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (license === "Boost"){
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    }
    else if (license === "Mozilla Public License 2.0"){
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    else {
        return ""
    }
        }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
function renderLicenseLink(license) { 
    if(license === "none") {
    return ""
    }
    else {
    return   "4. [License](#License)"
    }
 }

  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
    function renderLicenseSection(license) { 
    if(license === "none") {
        return ""
    }
    else {
        return   `## License
        ${license}`
    }
  }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
## Description 
    ${data.description}

## Installation 
    ${data.installation}
    

${renderLicenseSection(data.license)}
    
    
## Badges 
    ${data.badges}
    

## Contribution 
    ${data.contribution}
    

## Tests 
    ${data.tests}
    
`;

}


module.exports = generateMarkdown;