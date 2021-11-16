CREATE DATABASE players;

CREATE TABLE players(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    team VARCHAR
);

INSERT INTO players (name, team) VALUES
('Jason Tatum', 'Boston Celtics'),
('Stephen Curry', 'Golden State Warriors'),
('Kyle Lowry', 'Miami Heat'),
('Jaylen Brown', 'Boston Celtics');

SELECT * FROM players;