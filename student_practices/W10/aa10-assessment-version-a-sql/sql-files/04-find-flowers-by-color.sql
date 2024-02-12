-- Your code here 
SELECT varieties.name AS variety, color, stem_length
FROM bouquets
JOIN flowers ON bouquets.id = flowers.bouquet_id
JOIN varieties ON varieties.id = flowers.variety_id
WHERE color IN ('pink', 'purple')
ORDER BY variety, color, stem_length;
