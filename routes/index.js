const { response } = require('express');
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
        startQuestions();

    } 
    
    
    
    
    if (question.trackerAction === "View all roles") {
        viewRoles();
        startQuestions();
    } 
    
    
    
    if (question.trackerAction === "View all employees") {
        viewEmployees();
        startQuestions();
    } 
    
    
    
    let newRole
    if (question.trackerAction === "Add a role") {
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
                choices: ['1', '2', '3', '4']
            }
            
        ])

        if (newRole) {
            
            roles.push(newRole)
            console.log(roles);
        }
       
        addRole();
    } 
    
    
     if (question.trackerAction === "Add an employee") {
        // newEmployee = await inquirer.prompt([
        //     {
        //         type: 'input',
        //         name: 'newEmployeeFirstName',
        //         message: "What is the employee's first name? (Required)",
        //         validate: newEmployeeFirstName => {
        //             if (newEmployeeFirstName) {
        //                 return true;
        //             } else {
        //                 console.log("Please enter the employee's first name!")
        //             }
        //         }
        //     },
        //     {
        //         type: 'input',
        //         name: 'newEmployeeLasttName',
        //         message: "What is the employee's last name? (Required)",
        //         validate: newEmployeeLastName => {
        //             if (newEmployeeLastName) {
        //                 return true;
        //             } else {
        //                 console.log("Please enter the employee's last name!")
        //             }
        //         }
        //     },
        //     {
        //         type: 'input',
        //         name: 'roleID',
        //         message: "What is the employee's role id? (Required)",
        //         validate: roleID => {
        //             if (roleID) {
        //                 return true;
        //             } else {
        //                 console.log("Please enter the role ID!")
        //             }
        //         }
        //     },
        //     {
        //         type: 'input',
        //         name: 'managerName',
        //         message: "What is the Manager's name? (Required)",
        //         validate: managerName => {
        //             if (managerName) {
        //                 return true;
        //             } else {
        //                 console.log("Please enter the manager's name!")
        //             }
        //         }
        //     }

        // ])

        addEmployee();
    }
    
    if (question.trackerAction === "Update employee role") {
        updateEmployeeRole();
    } 
    
    
    else {
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
        console.log('Arrow down to perform another action');
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
        console.log('Arrow down to perform another action');
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
        console.log('Arrow down to perform another action');
    })
};

const addRole = () => {
   
    
    const params = [newRole.newRoleTitle, newRole.newRoleSalary, newRole.departmentID];
    console.log(params);
    db.query(`INSERT INTO employeerole (title, salary, department_id)
    VALUES (?, ?, ?)`, params, (err, res) => {
        if (err) {
            
            return;
        }
           
            console.log(result);
           
            
       
       
    });
    
    console.log('The role has been added!')
    
};

// const addEmployee = () => {
//     const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_name)
//     VALUES (?, ?, ?, ?)`;
//     const params = [newEmployee.newEmployeeFirstName, newEmployee.newEmployeeLastName, newEmployee.roleID, newEmployee.managerName];

//     db.query(sql, params, (err, res) => {
//         if (err) {
//             console.log('There is an error!');
//             return;
//         }
//        for (let m = 0; m < row.length; m++) {
//            employees.push(row[m]);
           
//        }
       
//     })
//     console.log("The employee has been added!")
// }

function updateEmployeeRole() {
    console.log("You can update an employee role ");
}


startQuestions();