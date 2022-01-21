CREATE DATABASE report_app;

CREATE TABLE users(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    username VARCHAR (255) UNIQUE,
    password VARCHAR(255),
    roles VARCHAR(255)
);

CREATE TABLE data_input(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    added_by VARCHAR (255) NOT NULL REFERENCES users(username),
    added_at VARCHAR (255) NOT NULL,
    dataset jsonb NOT NULL
);



 
