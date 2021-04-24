// it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.
// reminder of everything that a high-quality, professional README should contain, use guide for readme: https://github.com/coding-boot-camp/potential-enigma/blob/master/readme-guide.md
// The application will be invoked by using the following command: node index.js
// Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. 2.2.4: Screencastify Tutorial in Module 2 of the prework. You’ll need to submit a link to the video and add it to the README of your project.
// Do the license part in end before final check and submission


const fs = require('fs');
const inquirer = require('inquirer');
// this will link the license badge page
//const licensePage = require('./utils/generateMarkdown.js');
var title = [];
var badge = [];

// TODO: Create an array of questions for user input


const questions = () => {

  inquirer.prompt(
  [{
      // this needs to be fixed to change title of readme.md -check
      type: "input",
      name: "title",
      message: "What is your project title?"
    },    
     { type: "input",
      name: "description",
      message: "Please enter a description of your application"
      },
      { 
        type: "input",
        name: "installation",
        message: "Please enter the installation instructions"
      },
      { 
        type: "input",
        name: "usage",
        message: "Please enter the usage information"
      },
      { 
        type: "input",
        name: "contribution",
        message: "Please enter the contribution guidelines"
      },
      { 
        type: "input",
        name: "test",
        message: "Please enter the test instructions" 
      },
      { 
        //you can check this in 9.3, this section will be in conjuction of license portion of other page, selection is working but value is not being produced
        type: "checkbox",
        name: "license",
        message: "Please choose a license for your application from a list of following options (Press <space> to select, <a> to toggle all, <i> to invert)",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License", "BSD 3-Clause New or Revised License", "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]              
    
      },
      {
      type: "input",
      name: "Github",
      message: "What is your GitHub username for this application?" 
    },
{
type: "input",
name: "email",
message: "What is your email address?"
},
{   
type: "input",
name: "questions",
message: "Do you have any questions, you can also reach me with additional questions via email?"
}]).then(data =>  {
    console.log(data)
    let title = data.title;
    console.log(title);
    console.log(data.license);
    var badgeData = data.license;
    function makeBadge (badgeData) {
    switch (badgeData) 
    {
    case "[ 'Apache License 2.0' ]":
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"  
  
    case "[ 'MIT License' ]":
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
};

//this is connection point of generateMarkdown from another page    


    fs.writeFile(title + ".md", 
    `
${makeBadge()};

# Description:
    ${data.description}

# Installation:
    ${data.installation}
   
# Usage:
    ${data.usage}
    
# contribution:
    ${data.contribution}
        
# test:
    ${data.test}
     
# License:
    Your repository is licensed under the ${data.license} 
   
# Github:  
      ${data.Github}
     
# Email: 
      ${data.email}

# Questions: 
      ${data.questions}

    `, function(){
        console.log("success")
    })
})
};

questions();




/*
//questions()
//.then(portfolioData => {
//const pageHTML = writeToFile(portfolioData);
//fs.writeFile('.readme.md', pageHTML, err =>{
  //  if (err) throw new Error(err);

    //console.log('Page created! Check out index.html in this directory to see it!');
  
//});
//});


// TODO: Create a function to write README file


// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();


// screen-recorder needs to go on github (link for video), for sample readme use diff folder - ReadMe Generator

// Check: Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

// Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.


// Deliverables: 20%
// Check: A sample README generated using the application must be submitted.
// Your GitHub repository containing your application code.
// Walkthrough Video: 27%
// A walkthrough video that demonstrates the functionality of the README generator must be submitted and a link to the video should be included in your README file.
// The walkthrough video must demonstrate how a user would invoke the application from the command line.
// The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

// The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.
// Along with video and github url, A sample README.md file for a project repository generated using your application.





// GIVEN a command-line application that accepts user input, acceptance criteria
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// Hilary:
// Challenge: creating a readme using inquirer
// Starter code, take files out of develop folder, readme guide, command line
// application, no html or css, readme sections :table of contents, application user
// questions and end generate readme., when creating gitignore file choose node.js
// to automatically include node_modules,
// pacakge already has Package.json, just edit
// Nom install will install all dependencies present in package.json
*/