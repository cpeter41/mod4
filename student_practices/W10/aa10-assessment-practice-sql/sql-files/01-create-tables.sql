-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

DROP TABLE IF EXISTS transactions;
DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS tools;

CREATE TABLE tools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL,
    price DECIMAL(4,2) NOT NULL,
    category VARCHAR
);

CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR NOT NULL, 
    last_name VARCHAR, 
    phone_number NUMERIC(10, 0)
);

CREATE TABLE purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    purchase_id INTEGER REFERENCES purchases(id) ON DELETE CASCADE NOT NULL,
    tool_id INTEGER REFERENCES tools(id) NOT NULL,
    quantity INTEGER NOT NULL
);