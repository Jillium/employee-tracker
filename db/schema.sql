DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS employeerole;
DROP TABLE IF EXISTS department;





CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employeerole (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INTEGER(8),
    department_id INTEGER
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_name VARCHAR(30),
    department_id INTEGER,  
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(department_name) ON DELETE SET NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES employeerole(id) ON DELETE SET NULL

);




