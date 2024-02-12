-- Find the name of the cats who have an owner whose first name begins with an "H"
-- Your code here 
SELECT cats.name FROM cat_owners
JOIN owners ON cat_owners.owner_id = owners.id
JOIN cats ON cat_owners.cat_id = cats.id
WHERE owners.first_name LIKE 'H%';
