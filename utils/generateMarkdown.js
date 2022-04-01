// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseType = license;
    let yourLicense = ''
    if (licenseType === 'MIT') {
        yourLicense = `![License: MIT] (![badmath](https://img.shields.io/badge/MIT-License-blue.svg))`
    } else {
        license = 'N/A'
    }
    return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
## Description 
    ${data.description}

## Installation 
    ${data.installation}
    

## Credits 
    ${data.credits}
    

## License 
    ${renderLicenseBadge()}
    
    

## Badges 
    ${data.badges}
    

## Contribution 
    ${data.contributions}
    

## Tests 
    ${data.tests}
    
`;

}


module.exports = generateMarkdown;