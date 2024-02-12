-- Find the first and last names of the owner whose cats are born after the year 2015
-- Your code here 
SELECT DISTINCT owners.first_name, owners.last_name FROM cat_owners
JOIN owners ON cat_owners.owner_id = owners.id
JOIN cats ON cat_owners.cat_id = cats.id
WHERE cats.birth_year >= 2015;