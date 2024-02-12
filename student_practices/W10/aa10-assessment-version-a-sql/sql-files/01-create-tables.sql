-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

DROP TABLE IF EXISTS flowers;
DROP TABLE IF EXISTS bouquets;
DROP TABLE IF EXISTS varieties;

-- Your code here 
CREATE TABLE varieties (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR
);

CREATE TABLE bouquets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    price DECIMAL(4,2)
);

CREATE TABLE flowers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    color VARCHAR,
    stem_length VARCHAR,
    variety_id VARCHAR REFERENCES varieties(id),
    bouquet_id INTEGER REFERENCES bouquets(id) ON DELETE CASCADE
);
