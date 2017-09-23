-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;
-- USE burgers_db;

USE g8delghlzbuijzrh;
CREATE TABLE burgers (
id INTEGER (10) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(100),
devoured BOOLEAN,
date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

SELECT * FROM burgers;