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

