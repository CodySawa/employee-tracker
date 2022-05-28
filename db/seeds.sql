INSERT INTO departments (name)
VALUES
  ('Management'),
  ('Finance'),
  ('Engineering'),
  ('Marketing');


INSERT INTO roles (title, salary, department_id)
VALUES
  ('Manager', '90000', 1),
  ('Financial Analyst', '65000', 2),
  ('Accountant', '75000', 2),
  ('Software Engineer', '95000', 3),
  ('Full Stack Engineer', '115000', 3),
  ('Product Marketing Manager', '120000', 4);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Barry', 'Bonds', 1, NULL),
  ('Thomas', 'Jefferson', 1, 1),
  ('Frank', 'Senatra', 3, 2),
  ('Kelly', 'Slater', 5, 1),
  ('Joe', 'Kelly', 2, NULL),
  ('Jack', 'Johnson', 4, 1),
  ('Billy', 'Joel', 5, 1),
  ('Tom', 'Petty', 3, NULL),
  ('Eric', 'Clapton', 2, 2);