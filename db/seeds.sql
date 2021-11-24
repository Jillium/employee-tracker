INSERT INTO employee (first_name, last_name, role_id, manager_name)
VALUES
('Mike', 'Chan', 1, 'John Doe'),
('Ashley', 'Rodriguez', 2, ''),
('Kevin', 'Tupik', 3, 'Ashley Rodriguez'),
('Kunal', 'Singh', 4, ''),
('Malia', 'Brown', 5, 'Kunal Singh'),
('Sarah', 'Lourd', 6, ''),
('Tom', 'Allen', 7, 'Sarah Lourd');


INSERT INTO employeerole (title, salary, department_id)
VALUES 
('Salesperson', '80000', 1),
('Lead Engineer', '150000', 2),
('Software Engineer', '120000', 2),
('Account Manager', '160000', 3),
('Accountant', '125000', 3),
('Legal Team Lead', '250000', 4),
('Lawyer', '190000', 4);


INSERT INTO department (department_name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');


