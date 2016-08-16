DROP TABLE IF EXISTS results;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255)
);


CREATE TABLE results (
	id SERIAL PRIMARY KEY,
	friend VARCHAR(255),
	year_sign VARCHAR(255),
	month_sign VARCHAR(255),
	peach VARCHAR(255),
	user_id VARCHAR(255) REFERENCES users(email)
);
