-- CREATE DATABASE report_app;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR (255),
    password VARCHAR(255),
    roles VARCHAR(255)
);

CREATE Table data_input(
    id SERIAL PRIMARY KEY,
    added_by VARCHAR (255) NOT NULL,
    dataset jsonb
);

