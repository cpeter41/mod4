INSERT INTO users (name, email, password)
VALUES ('Steve', 'steve@mail.com', 'supersecretpassword!'),
       ('Bob', 'bob@mail.com', 'supersecretpassword!'),
       ('Bill', 'bill@mail.com', 'supersecretpassword!'),
       ('Jim', 'jim@mail.com', 'supersecretpassword!'),
       ('Pam', 'pam@mail.com', 'supersecretpassword!'),
       ('Jill', 'jill@mail.com', 'supersecretpassword!'),
       ('Barb', 'barb@mail.com', 'supersecretpassword!'),
       ('Herb', 'herb@mail.com', 'supersecretpassword!'),
       ('Ash', 'ash@mail.com', 'supersecretpassword!'),
       ('Doug', 'doug@mail.com', 'supersecretpassword!'),
       ('Terry', 'terry@mail.com', 'supersecretpassword!'),
       ('Pat', 'pat@mail.com', 'supersecretpassword!'),
       ('Jane', 'jane@mail.com', 'supersecretpassword!'),
       ('Wes', 'wes@mail.com', 'supersecretpassword!'),
       ('Sandy', 'sandy@mail.com', 'supersecretpassword!'),
       ('Jake', 'jake@mail.com', 'supersecretpassword!'),
       ('Sam', 'sam@mail.com', 'supersecretpassword!'),
       ('Brad', 'brad@mail.com', 'supersecretpassword!'),
       ('Kate', 'kate@mail.com', 'supersecretpassword!'),
       ('Dave', 'dave@mail.com', 'supersecretpassword!');

INSERT INTO artists (name, genre)
VALUES ('Tool', 'Progressive Rock'),
       ('Primus', 'Progressive Rock'),
       ('Oceansize', 'Progressive Rock'),
       ('Dream Theater', 'Progressive Rock'),
       ('Rush', 'Progressive Rock'),
       ('Notorious B.I.G.', 'Hip Hop'),
       ('A Tribe Called Quest', 'Hip Hop'),
       ('Tupac Shakur', 'Hip Hop'),
       ('Eminem', 'Hip Hop'),
       ('Del The Funky Homosapien', 'Hip Hop'),
       ('Led Zeppelin', 'Classic Rock'),
       ('AC/DC', 'Classic Rock'),
       ('The Doobie Brothers', 'Classic Rock'),
       ('Lynyrd Skynyrd', 'Classic Rock'),
       ('The Four Tops', 'R&B'),
       ('The Temptations', 'R&B'),
       ('Bill Withers', 'R&B'),
       ('Otis Redding', 'R&B');

INSERT INTO albums (artist_id, name)
VALUES (1, 'Aenima'),
       (1, 'Opiate'),
       (1, 'Undertow'),
       (1, 'Lateralus'),
       (1, '10,000 Days'),
       (2, 'Pork Soda'),
       (2, 'Frizzle Fry'),
       (2, 'Sailing The Seas Of Cheese'),
       (2, 'The Brown Album'),
       (3, 'Everybody Into Position'),
       (4, 'Images and Words'),
       (4, 'Awake'),
       (5, '2112'),
       (5, 'Moving Pictures'),
       (6, 'Notorious'),
       (6, 'Ready to Die'),
       (7, 'The Low End Theory'),
       (7, 'People''s Instinctive Travels and the Paths of Rhythm'),
       (8, 'All Eyez on Me'),
       (8, 'Me Against the World'),
       (9, 'The Marshall Mathers LP'),
       (9, 'The Slim Shady LP'),
       (10, 'Both Sides of the Brain'),
       (10, 'No Need For Alarm'),
       (11, 'IV'),
       (11, 'Houses of the Holy'),
       (12, 'Highway to Hell'),
       (12, 'Back in Black'),
       (13, 'Toulouse Street'),
       (13, 'The Captain and Me'),
       (14, 'Pronounced Lĕh-nérd Skin-nérd'),
       (15, 'Four Tops'),
       (16, 'The Temptations Sing Smokey'),
       (17, 'Just As I Am'),
       (18, 'The Dock of the Bay');

INSERT INTO tracks (album_id, name, url_path)
VALUES (1, 'Aenima', 'www.google.com'),
       (1, 'Pushit', 'www.google.com'),
       (2, 'Opiate', 'www.google.com'),
       (3, 'Sober', 'www.google.com'),
       (4, 'Schism', 'www.google.com'),
       (5, 'Vicarious', 'www.google.com'),
       (6, 'My Name Is Mud', 'www.google.com'),
       (7, 'Too Many Puppies', 'www.google.com'),
       (7, 'John The Fisherman', 'www.google.com'),
       (8, 'Jerry Was A Race Car Driver', 'www.google.com'),
       (9, 'Shake Hands With Beef', 'www.google.com'),
       (10, 'A Homage To A Shame', 'www.google.com'),
       (11, 'Pull Me Under', 'www.google.com'),
       (11, 'Under A Glass Moon', 'www.google.com'),
       (12, 'Caught In A Web', 'www.google.com'),
       (13, '2112 Overture', 'www.google.com'),
       (13, 'II. The Temples of Syrinx', 'www.google.com'),
       (14, 'Red Barchetta', 'www.google.com'),
       (14, 'YYZ', 'www.google.com'),
       (14, 'Tom Sawyer', 'www.google.com'),
       (14, 'Limelight', 'www.google.com'),
       (15, 'Hypnotize', 'www.google.com'),
       (15, 'Notorious Thugs', 'www.google.com'),
       (16, 'Gimme the Loot', 'www.google.com'),
       (16, 'Warning', 'www.google.com'),
       (17, 'Buggin'' Out', 'www.google.com'),
       (17, 'Butter', 'www.google.com'),
       (18, 'Can I Kick It?', 'www.google.com'),
       (18, 'I Left My Wallet In El Segundo', 'www.google.com'),
       (19, 'How Do U Want It', 'www.google.com'),
       (19, 'I Ain''t Mad at Cha', 'www.google.com'),
       (19, 'Picture Me Rollin''', 'www.google.com'),
       (20, 'Dear Mama', 'www.google.com'),
       (20, 'Outlaw', 'www.google.com'),
       (21, 'Stan', 'www.google.com'),
       (21, 'The Way I Am', 'www.google.com'),
       (22, 'Brain Damage', 'www.google.com'),
       (22, 'My Fault', 'www.google.com'),
       (23, 'If You Must', 'www.google.com'),
       (24, 'You''re in Shambles', 'www.google.com'),
       (25, 'Stairway To Heaven', 'www.google.com'),
       (26, 'D''yer Mak''er', 'www.google.com'),
       (27, 'Highway to Hell', 'www.google.com'),
       (28, 'Back in Black', 'www.google.com'),
       (29, 'Listen to the Music', 'www.google.com'),
       (29, 'Rockin'' Down the Highway', 'www.google.com'),
       (30, 'Long Train Runnin''', 'www.google.com'),
       (30, 'Evil Woman', 'www.google.com'),
       (31, 'Gimme Three Steps', 'www.google.com'),
       (31, 'Simple Man', 'www.google.com'),
       (31, 'Free Bird', 'www.google.com'),
       (31, 'Tuesday''s Gone', 'www.google.com'),
       (32, 'Baby I Need Your Loving', 'www.google.com'),
       (33, 'My Girl', 'www.google.com'),
       (34, 'Grandma''s Hands', 'www.google.com'),
       (34, 'Moanin'' and Groanin''', 'www.google.com'),
       (35, 'Let Me Come On Home', 'www.google.com'),
       (35, 'Ole Man Trouble', 'www.google.com'),
       (35, '(Sittin'' On) The Dock of the Bay', 'www.google.com');

INSERT INTO playlists (user_id, name)
VALUES (1, 'Chillin'''),
       (1, 'Groovin'''),
       (1, 'Rockin'''),
       (2, 'Highway Music'),
       (2, 'Feelin'' Weird'),
       (3, 'Road Tunes'),
       (4, 'Oldies'),
       (5, 'Skynyrd 4-Eva'),
       (6, 'Old School'),
       (7, 'Barb''s Playlist');

INSERT INTO playlist_tracks
VALUES (1, 16, 1),
       (1, 17, 2),
       (1, 18, 3),
       (2, 18, 1),
       (2, 59, 2),
       (2, 50, 3),
       (2, 24, 4),
       (2, 15, 5),
       (3, 1, 1),
       (3, 2, 2),
       (3, 3, 3),
       (3, 4, 4),
       (3, 5, 5),
       (3, 6, 6),
       (4, 43, 1),
       (4, 46, 2),
       (4, 44, 3);