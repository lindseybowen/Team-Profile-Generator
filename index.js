const inquirer = require('inquirer')
const fs = require('fs')
let newTeamProfile = []


function managerPrompt(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Who is the team manager?',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the employee ID for the team manager?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team managers email?',
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: 'What is the office number of the team manager?',
        },
    ]).then(function(response){
        var managerName = response.managerName;
        var managerID = response.managerID;
        var managerEmail = response.managerEmail;
        var managerNumber = response.managerNumber
        const newTeamProfile = new Manager(managerName, managerID, managerEmail, managerNumber);
        finalTeam.push(newTeamProfile);
        teamMemPrompt();
    })
}
function engineerPrompt(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the engineer you are inputting?',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the employee ID for the engineer?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers email?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the Github username of the engineer?',
        },
    ]).then(function(response){
        var engineerName = response.engineerName;
        var engineerID = response.engineerID;
        var engineerEmail = response.engineerEmail;
        var engineerGithub = response.engineerNumber
        const newTeamProfile = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
        finalTeam.push(newTeamProfile);
        teamMemPrompt();
    })
}    

function internPrompt(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of the intern you are inputting?',
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the employee ID for the intern?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns email?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does the intern go to?',
        },
    ]).then(function(response){
        var internName = response.internName;
        var internID = response.internID;
        var internEmail = response.internEmail;
        var internSchool = response.internSchool
        const newTeamProfile = new Intern(internName, internID, internEmail, internSchool);
        finalTeam.push(newTeamProfile);
        teamMemPrompt();
    })
} 
    
    function teamMemPrompt(){
        inquirer.prompt([
            {
                type: 'list',
                name: 'addMore',
                message: 'Would you like to add another member to your team?',
                choices: ['Add another Engineer.', 'Add another Intern.', 'No, my team is complete.']
            },
        ]);
    }



