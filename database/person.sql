CREATE DATABASE testcrud;

USE testcrud;

DROP TABLE IF EXISTS Persons;

CREATE TABLE Persons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lastname VARCHAR(255),
    firstname VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255)
);

SHOW TABLES;
