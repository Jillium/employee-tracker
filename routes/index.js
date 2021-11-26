const inquirer = require('inquirer');
const db = require('../db/connection');

const departments = [];
const roles = [];
const employees = [];

console.log("Welcome to the employee tracker?")
async function startQuestions() {
    const question = await inquirer.prompt([
        {
            type: 'list',
            name: 'trackerAction',
            message: "What would you like to do?",
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a role', 'Add an employee', 'Update employee role', 'Quit']
        }
    ])

    if (question.trackerAction === 'View all departments') {
        viewDepartments();

    } else if (question.trackerAction === "View all roles") {
        viewRoles();
    } else if (question.trackerAction === "View all employees") {
        viewEmployees();
    } else if (question.trackerAction === "Add a role") {
        newRole = await inquirer.prompt([
            {
            type: 'input',
            name: 'newRoleTitle',
            message: "What is the title of the new role? (Required)",
            validate: newRoleTitle => {
                if (newRoleTitle) {
                    return true;
                } else {
                    console.log("Please enter a role title")
                }
            }
            },
            {
                type: 'input',
                name: 'newRoleSalary',
                message: "What is the new role's salary? (Required)",
                validate: newRoleSalary => {
                    if (newRoleSalary) {
                        return true;
                    } else {
                        console.log("Please enter the role's salary")
                    }
                }
            },
            {
                type: 'list',
                name: 'departmentID',
                message: "What department does the new role belong to?",
                choices: ['Sales', 'Engineering', 'Finance', 'Legal']
            }
            
        ])
        addRole();
    } else if (question.trackerAction === "Add an employee") {
        addEmployee();
    } else if (question.trackerAction === "Update employee role") {
        updateEmployeeRole();
    } else {
        console.log("Have a nice day!")
        return;
    }
    startQuestions();
};

const viewDepartments = () => {



    db.query(`SELECT * FROM department`, (err, row) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < row.length; i++) {
            departments.push(row[i]);
        }
        console.log(departments);
    })

};



function viewRoles() {


    db.query(`SELECT * FROM employeerole`, (err, row) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let j = 0; j < row.length; j++) {
            roles.push(row[j]);
        }
        console.log(roles);
    })

};

const viewEmployees = () => {


    db.query(`SELECT * FROM employee`, (err, row) => {
        if (err) {
            console.log(err);
            return;
        }
        for (let k = 0; k < row.length; k++) {
            employees.push(row[k]);
        }
        console.log(employees);
    })
};

const addRole = () => {
    const sql = `INSERT INTO employeerole (title, salary, department_id)
    VALUES (?, ?, ?)`;
    const params = [newRole.newRoleTitle, newRole.newRoleSalary, newRole.departmentID];

    db.query(sql, params, (err, res) => {
        if (err) {
            console.log('There has been an error!');
            return;
        }
       for (let l = 0; l < row.length; l++) {
           roles.push(row[l]);
           
       }
       
    })
    console.log("The role has been added!")
};


const addEmployee = () => {
    console.log('You will add an employee')
}

const updateEmployeeRole = () => {
    console.log("You can update an employee role ")
}


startQuestions();