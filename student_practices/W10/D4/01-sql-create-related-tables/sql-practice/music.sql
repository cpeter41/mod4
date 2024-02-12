-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS musicians_instruments;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id REFERENCES bands(id) NOT NULL
);
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);

INSERT INTO bands (name) VALUES ("Talking Heads");
INSERT INTO musicians (first_name, last_name, band_id) VALUES (
    "David",
    "Byrne",
    1
);
INSERT INTO instruments (type) VALUES ("Guitar");

CREATE TABLE musicians_instruments (
    musician_id INTEGER REFERENCES musicians(id),
    instrument_id INTEGER REFERENCES instruments(id)
);
-- INSERT INTO musicians_instruments (musician_id, instrument_id)
-- VALUES (1, 1);
