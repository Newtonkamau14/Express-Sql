CREATE DATABASE testcrud;

USE testcrud;

DROP TABLE IF EXISTS Persons;

CREATE TABLE Persons (
    id INT NOT NULL AUTO_INCREMENT ,
    lastname VARCHAR(255),
    firstname VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    PRIMARY KEY ( id )
);

SHOW TABLES;


INSERT INTO Persons 
            (lastname, firstname, address, city)
        VALUES
            ('Anders','Maria','WA1 1DP','London'),
            ('Hardy', 'Thomas', '12209','Berlin'),
            ('Moos','Hanna','68306','Mannheim'),
            ('Lincoln','Elizabeth','T2F 8M4','Tsawassen'),
            ('Roulet','Annette','31000','Toulouse'),
            ('Bertand','MArie','75012','Paris'),
            ('Pipps','Georg','5020','Salzburg'),
            ('Castro','ISabel','1756','Lisboa'),
            ('Carvalho','Lucia','05487-020','Sao Paulo'),
            ('Kloss','Horst','01307','Cunewalde'),
            ('Holz','Micheal','1203','Geneve'),
            ('Limeria','Jnete','02389-890','Riode Janiero'),
            ('Moroni','Maurizio','42100','Reggio'),
            ('Kunar','Hari','OX15 4NB','London'),
            ('Jytte','Petersen','1934','Kobenhavn'),
            ('Ibsen','Palle','8200','Arhus'),
            ('Muller','Rita','70563','Stuutgart'),
            ('Paula','Parente','08737-363','Resende'),
            ('Karl','Jablonski','98128','Seattle');


        

