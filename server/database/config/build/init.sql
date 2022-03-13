BEGIN;
DROP TABLE IF EXISTS users,comments,posts CASCADE;
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL
);
CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  vote INTEGER,
  date VARCHAR(50) NOT NULL,
  CONSTRAINT user_post_fk FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  post_id INTEGER,
  content VARCHAR(255) NOT NULL,
  date VARCHAR(50) NOT NULL,
  CONSTRAINT post_comment_fk FOREIGN KEY (post_id) REFERENCES posts(id)
);
COMMIT;