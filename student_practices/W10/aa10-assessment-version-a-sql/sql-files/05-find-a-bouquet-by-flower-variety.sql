-- Your code here 
SELECT DISTINCT bouquets.name AS name, price
FROM bouquets
JOIN flowers ON (flowers.bouquet_id = bouquets.id)
JOIN varieties ON (flowers.variety_id = varieties.id)
WHERE varieties.name = 'Carnation'
LIMIT 1;