const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/employee.js")
const manager = require("./lib/manager.js");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");
const genHTML = require("./src/generateHTML");

let allEngineers = [];
let allInterns = [];
let allManagers = [];

let title = "";

let menuAnswer = "";

const team = [{
    type: 'input',
    name: 'team',
    message: 'What is your team name?',
}];

const menu = [{
    type: "list",
    name: "menu",
    message: "You may add:",
    choices: ["Engineer", "Intern", "Finish!"]
}];

const managerQs = [{
        type: 'input',
        name: 'moniker',
        message: 'What is the manager name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the manager ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the manager email?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is the manager office number?',
    }
];

const engineerQs = [{
        type: 'input',
        name: 'moniker',
        message: 'What is the engineer name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineer ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineer email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer GitHub Username? (case matters):',
    }
];

const internQs = [{
        type: 'input',
        name: 'moniker',
        message: 'What is the intern name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the intern ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the intern email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Where did the intern go to school?',
    }
];
async function addEng(){

    await inquirer.prompt(engineerQs)
    .then((data) => {

        let b = new engineer(data.id, data.moniker, data.email, data.github);

        allEngineers.push(b);
})};

async function addInt(){
     await inquirer.prompt(internQs)
     .then((data) => {

        let c = new intern(data.id, data.moniker, data.email, data.school);

        allInterns.push(c);
    })
};

async function addteam(){

    await  inquirer.prompt(team) 
    .then((data) => {
        title = data.team; 
        
        writeToFile(title, allManagers, allEngineers, allInterns);
    })
};


async function promptUser() {

  await  inquirer.prompt(managerQs)
        .then((data) => { 

            let a = new manager(data.id, data.moniker, data.email, data.office)

            allManagers.push(a);
        })
    promptMenu();

};

async function promptMenu()  {
    await inquirer.prompt(menu)
        .then((data) => { menuAnswer = data.menu;
             menuIf(menuAnswer);})

async function menuIf(answer){

            if (answer === "Engineer") {

                   await addEng()   
                    
                    

                promptMenu();

            } else if (answer === "Intern") {

                await addInt()
                    

                promptMenu();

            } else if (answer === "Finish!") {

                   await addteam()
                  

               

                //return;

            }
        }
};



// TODO: Create a function to write README file
function writeToFile(title, managers, engineers, interns) {
    const htmlContent = genHTML.generateHTML(title, managers, engineers, interns);

    fs.writeFile(`./dist/${title}.html`, htmlContent, (err) =>
        err ? console.log(err) : console.log(`Successfully created a new team Profile at ${title}.html!`)
    );
};

// TODO: Create a function to initialize app

promptUser();