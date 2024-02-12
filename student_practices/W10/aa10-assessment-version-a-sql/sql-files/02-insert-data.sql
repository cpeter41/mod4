-- Your code here 
INSERT INTO varieties (name) 
VALUES 
    ('Carnation'),        -- 1
    ('Lily'),             -- 2
    ('Solidago'),         -- 3
    ('Daisy'),            -- 4
    ('Baby''s Breath');   -- 5

INSERT INTO bouquets (name, price)
VALUES 
    ('Get Well Soon', 59.99),
    ('Mother''s Day', 39.99);

INSERT INTO flowers (color, stem_length, variety_id, bouquet_id)
VALUES
    ('yellow', 'short',  1, 1),
    ('white',  'short',  1, 1),
    ('white',  'short',  2, 1),
    ('yellow', 'medium', 3, 1),
    ('yellow', 'short',  4, 1),
    ('pink',   'long',   1, 2),
    ('purple', 'long',   1, 2),
    (null,     'long',   5, 2);