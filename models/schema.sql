DROP DATABASE IF EXISTS roadtrip_db;
CREATE DATABASE roadtrp_db;
USE roadtrip_db;


CREATE TABLE States(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  States VARCHAR(255),
  PRIMARY KEY (id)
);

 CREATE TABLE city(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  stateId INTEGER(11),
  city VARCHAR(255),
  FOREIGN KEY (statesid) REFERENCES states(id)

INSERT INTO states (states) values ('Illinois');
INSERT INTO states (States) values ('Missouri');
INSERT INTO states (States) values ('Kansas');
INSERT INTO states (States) values ('Oklahoma');
INSERT INTO states (States) values ('Texas');
INSERT INTO states (States) values ('New Mexico');
INSERT INTO states (States) values ('Arizona');
INSERT INTO states (States) values ('California');

INSERT INTO city (city, stateId) values ('Chicago',1);
INSERT INTO city (city, stateId) values ('St.Louis',2);
INSERT INTO city (city, stateId) values ('Baxter Springs',3);
INSERT INTO city (city, stateId) values ('Oaklahoma City',4);
INSERT INTO city (city, stateId) values ('Shamrock',5);
INSERT INTO city (city, stateId) values ('Albuquerque',6);
INSERT INTO city (city, stateId) values ('Flagstaff',7);
INSERT INTO city (city, stateId) values ('Pomona',8);


use  roadtrip_db;
describe city;
SELECT * FROM states;
describe states;
SELECT * FROM city;

-- show ALL books with authors
-- INNER JOIN will only return all matching values from both tables
SELECT city, states
FROM city
right outer JOIN states ON city.statesId = states.id;

-- show ALL books, even if we don't know the author
-- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
SELECT states , city
FROM states
LEFT JOIN states ON city.statesId = states.id;

-- show ALL books, even if we don't know the author
-- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
SELECT city, states
FROM city
RIGHT JOIN city ON city.statesId = states.id;