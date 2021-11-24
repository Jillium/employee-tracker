DROP TABLE IF EXISTS employeerole;
DROP TABLE IF EXISTS department;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

-- CREATE TABLE employeerole (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(30) NOT NULL,
--     salary VARCHAR(30) NOT NULL,
--     department_id INTEGER,
-- );