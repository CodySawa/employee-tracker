INSERT INTO department (name)
VALUES
  ('Finance'),
  ('Engineering'),
  ('Marketing');


INSERT INTO role (title, salary, department_id)
VALUES
  ('Financial Analyst', '65000', 1),
  ('Accountant', '75000', 1),
  ('Software Engineer', '95000', 2),
  ('Full Stack Engineer', '115000', 2),
  ('Product Marketing Manager', '120000', 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Barry', 'Bonds', 5, NULL),
  ('Thomas', 'Jefferson', 4, 1),
  ('Frank', 'Senatra', 3, 2),
  ('Kelly', 'Slater', 5, 1),
  ('Joe', 'Kelly', 2, NULL),
  ('Jack', 'Johnson', 4, 1),
  ('Billy', 'Joel', 5, 1),
  ('Tom', 'Petty', 3, NULL),
  ('Eric', 'Clapton', 1, 2);