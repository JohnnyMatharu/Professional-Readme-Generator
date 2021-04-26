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

// test



// test finish
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
        type: "list",
        name: "license",
        message: "Please choose a license for your application from a list of following options (Press <enter> to select)",
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
    function makeBadge (license) {
        if (license === "Apache License 2.0") {
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        } else if (license === "GNU General Public License v3.0") {
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        } 
        else if (license === "MIT License") {
          return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      } 
      else if (license === "BSD 2-Clause Simplified License") {
        return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    } 
    else if (license === "BSD 3-Clause New or Revised License") {
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  else if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
} 
else if (license === "Creative Commons Zero v1.0 Universal") {
  return "Badge is not available, please visit http://creativecommons.org/licenses/by/4.0/ for more information"
} 
else if (license === "Eclipse Public License 2.0") {
  return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
}   
else if (license === "GNU Affero General Public License v3.0") {
  return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
}   
else if (license === "GNU General Public License v2.0") {
  return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
} 
else if (license === "GNU Lesser General Public License v2.1") {
  return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
} 
else if (license === "Mozilla Public License 2.0") {
  return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
} 
else if (license === "The Unlicense") {
  return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
} 
        else {
            return "Unknown License";
        }
      };
      
      
//this is connection point of generateMarkdown from another page    
//please add table of contents as well
//try adding array methods if needed

    fs.writeFile(title + ".md", 
    `
${makeBadge(data.license)}


# <h3 id = "descr">Description:</h3>
    ${data.description}


# <h3>Table of Contents</h3>
    
<a href="#install">Installation</a>
    
<a href="#usage">Usage</a>
    
<a href="#contr">Contribution</a>
    
<a href="#test">Test</a>
    
<a href="#license">License</a>
    
<a href="#github">Github</a>
    
<a href="#email">Email</a>
    
<a href="#question">Questions</a>

        
# <h3 id = "install">Installation:</h3>
    ${data.installation}


# <h3 id = "usage">Usage:</h3>
    ${data.usage}
    

# <h3 id = "contr">Contribution:</h3>
    ${data.contribution}
    
    
# <h3 id = "test">Test:</h3>
    ${data.test}
    

# <h3 id = "license">License:</h3>
    Your repository is licensed under the ${data.license} 
   

# <h3 id = "github">Github:</h3>  
<a href="https://github.com/${data.Github}">Github Link</a>


# <h3 id = "email">Email:</h3> 
      ${data.email}


# <h3 id = "question">Questions:</h3> 
      ${data.questions}

    `, function(){
        console.log("success")
    })
})
};

questions();




/*


// screen-recorder needs to go on github (link for video), for sample readme use diff folder - ReadMe Generator

// Check: Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

// Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.


// Check: A sample README generated using the application must be submitted.
// Your GitHub repository containing your application code.
// Walkthrough Video: 27%
// A walkthrough video that demonstrates the functionality of the README generator must be submitted and a link to the video should be included in your README file.
// The walkthrough video must demonstrate how a user would invoke the application from the command line.
// The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

// The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.
// Along with video and github url, A sample README.md file for a project repository generated using your application.
*/