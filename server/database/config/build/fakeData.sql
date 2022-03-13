INSERT INTO users(username, email, firstname, lastname, password)
VALUES (
    'mohammed',
    'mohammed@gmail.com',
    'Mohammed',
    'Hamada',
    '$2a$10$FEPKHKn939PO5aBr1pDBzORkq6XjBqHhCkqJ18M06a9NgwIt2u3h6'
  );
INSERT INTO users(username, email, firstname, lastname, password)
VALUES (
    'ahmed',
    'ahmed@gmail.com',
    'Ahmed',
    'Hamada',
    '$2a$10$4LjcIHif4ND32BDbwGmsZ.UrbEBy0dbxh5lbUTIkh0ZUL1sxCEfWe'
  );
INSERT INTO posts(user_id, title, content, vote, date)
VALUES (
    1,
    'Gaza Under Attack',
    'The Gaza Strip, or simply Gaza, is a Palestinian enclave on the eastern coast of the Mediterranean Sea. It borders Egypt on the southwest for 11 kilometers and Israel on the east and north along a 51 km border. The Gaza Strip and the West Bank are claimed by the de jure sovereign State of Palestine.',
    203,
    '2020-10-05'
  );
INSERT INTO posts(user_id, title, content, vote, date)
VALUES (
    2,
    'Social Media',
    'You know you’ve gotta drum up fresh social media content ideas to keep your followers interested and attract new people to your account. But it can be downright exhausting to be creative every day and deliver content gold on multiple platforms.',
    25,
    '2017-07-05'
  );
INSERT INTO posts(user_id, title, content, vote, date)
VALUES (
    1,
    'Ukraine',
    'Ukraine is a country in Eastern Europe. It is the second-largest country by area in Europe after Russia, which it borders to the east and north-east.',
    2,
    '2022-03-05'
  );
INSERT INTO comments(post_id, content, date)
VALUES (
    2,
    'Yes thats Good',
    '2022-03-05'
  );
INSERT INTO comments(post_id, content, date)
VALUES (
    1,
    'Yes thats Good',
    '2022-03-05'
  );