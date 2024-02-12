-- Your code here 
SELECT varieties.name AS name, color, stem_length
FROM flowers
JOIN varieties ON (flowers.variety_id = varieties.id)
ORDER BY name, color, stem_length;