--E.B.1 Crie um script que delete e crie todas as tabelas.

DROP TABLE IF EXISTS projects_navers;
DROP TABLE IF EXISTS navers;
DROP TABLE IF EXISTS projects;

CREATE TABLE IF NOT EXISTS navers (
  id              INTEGER       NOT NULL    AUTO_INCREMENT,
  name            VARCHAR(100)  NOT NULL,
  job_role        VARCHAR(100)  NOT NULL,
  birthdate       DATE          NOT NULL,
  admission_date  DATE          NOT NULL,
  created_at      TIMESTAMP     NOT NULL    DEFAULT CURRENT_TIMESTAMP,
  updated_at      TIMESTAMP     NOT NULL    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS projects (
  id                  INTEGER         NOT NULL  AUTO_INCREMENT,
  name                VARCHAR(100)    NOT NULL,
  created_at          TIMESTAMP       NOT NULL  DEFAULT CURRENT_TIMESTAMP,
  updated_at          TIMESTAMP       NOT NULL  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS projects_navers (
  id                  INTEGER         NOT NULL  AUTO_INCREMENT,
  project_id          INTEGER         NOT NULL,
  naver_id            INTEGER         NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_projects_navers_projects
    FOREIGN KEY (project_id)
    REFERENCES projects(id)
    ON DELETE CASCADE,
  CONSTRAINT fk_projects_navers_navers
    FOREIGN KEY (naver_id)
    REFERENCES navers(id)
    ON DELETE CASCADE
);
