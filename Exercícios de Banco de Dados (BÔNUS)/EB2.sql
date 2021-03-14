--E.B.2 Faça um script que limpe e crie dados nas tabelas.

DELETE FROM projects_navers;
ALTER TABLE projects_navers AUTO_INCREMENT = 1;

DELETE FROM projects;
ALTER TABLE projects AUTO_INCREMENT = 1;

DELETE FROM navers;
ALTER TABLE navers AUTO_INCREMENT = 1;

INSERT INTO navers (name, job_role, birthdate, admission_date)
  VALUES ("Gabriel", "Estagiário", "1998-01-12", "2021-03-13");
  SET @gabriel_id = LAST_INSERT_ID();

INSERT INTO navers (name, job_role, birthdate, admission_date)
  VALUES ("Daniel", "Desenvolvedor", "1994-03-15", "2020-02-20");
  SET @daniel_id = LAST_INSERT_ID();

INSERT INTO projects (name)
  VALUES ("Teste Back-End");
  SET @project_id = LAST_INSERT_ID();

INSERT INTO projects_navers (project_id, naver_id)
  VALUES (@project_id, @gabriel_id);

INSERT INTO projects_navers (project_id, naver_id)
  VALUES (@project_id, @daniel_id);
