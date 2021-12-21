-- CREATE DATABASE masterDatabasesDb;

CREATE Table data_input(
    id SERIAL PRIMARY KEY,
    added_by VARCHAR (255) NOT NULL,
    dataset jsonb
);