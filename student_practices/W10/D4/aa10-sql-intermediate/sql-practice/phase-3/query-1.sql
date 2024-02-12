-- Find Hermione's cats
-- Your code here
SELECT cats.name
FROM cats
JOIN cat_owners ON cats.id = cat_owners.cat_id
JOIN owners ON cat_owners.owner_id = owners.id
WHERE owners.first_name = "Hermione";

SELECT toys.name
FROM toys
JOIN toys.cat_id ON cats.id = cat.id
JOIN cat_owners ON cats.id = cat_owners.cat.id
JOIN owners ON cat_owners.owner_id = owners.id
WHERE owners.first_name = "Hermione";
