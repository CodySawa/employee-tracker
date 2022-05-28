const inquirer = require("inquirer");
const connection = require('./db/connection');

function startPrompt() {
    inquirer
        .prompt([
            {
                type: "list",
                loop: false,
                name: "choice",
                message: "What would you like to do?",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "QUIT",
                ],
            },
        ])
        .then((answers) => {
            switch (answers.choice) {
                case "View all departments":
                    view("departments");
                    break;
                case "View all roles":
                    view("roles");
                    break;
                case "View all employees":
                    view("employees");
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                default:
                    connection.end();
            }
        });
}

function view(tableName) {
    let sql;
    if (tableName == "departments") {
        sql = `SELECT * FROM departments;`;
    } else if (tableName == "roles") {
        sql = `SELECT roles.title, roles.id, departments.name AS department, roles.salary
        FROM roles LEFT JOIN departments
        ON roles.department_id = departments.id;`
    } else if (tableName == "employees") {
        sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, roles.salary, CONCAT(manager_table.first_name, ' ', manager_table.last_name) AS manager
        FROM employees LEFT JOIN roles
        ON employees.role_id = roles.id
        LEFT JOIN departments
        ON roles.department_id = departments.id
        LEFT JOIN employees manager_table
        ON manager_table.id = employees.manager_id;`
    }

    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        startPrompt();
    });
}

function addDepartment() {
    inquirer
        .prompt([
            {
                name: "name",
                message: "Department Name:",
                type: "input",
            },
        ])
        .then((response) => {
            const sql = `INSERT INTO departments (name)
            VALUES ("${response.name}");`;
            connection.query(sql, (err, res) => {
                if (err) throw err;
                console.table(res);
                startPrompt();
            });
        })

}
function addRole() {
    inquirer
        .prompt([
            {
                name: "title",
                message: "Enter Role title:",
                type: "input",
            },
            {
                name: "salary",
                message: "Enter Salary:",
                type: "input",
            },
            {
                name: "department_id",
                message: "Enter Department ID:",
                type: "input",
            },
        ])
        .then((response) => {
            const sql = `INSERT INTO roles (title, salary, department_id)
        VALUES ("${response.title}", ${response.salary}, ${response.department_id});`;
            connection.query(sql, (err, res) => {
                if (err) throw err;
                console.table(res);
                startPrompt();
            });
        })
}

function addEmployee() {
    inquirer
        .prompt([
            {
                name: "first_name",
                message: "Enter Employee's First Name:",
                type: "input",
            },
            {
                name: "last_name",
                message: "Enter Employee's Last Name:",
                type: "input",
            },
            {
                name: "role_id",
                message: "Enter Employee's Role ID:",
                type: "input",
            },
            {
                name: "manager_id",
                message: "Enter Employee's Manager ID (enter 0 if none):",
                type: "input",
            },
        ])
        .then((response) => {
            if (response.manager_id == 0) {
                response.manager_id = null;
            }
            const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUES ("${response.first_name}", "${response.last_name}", ${response.role_id}, ${response.manager_id});`;
            connection.query(sql, (err, res) => {
                if (err) throw err;
                console.table(res);
                startPrompt();
            });
        })
}


startPrompt();