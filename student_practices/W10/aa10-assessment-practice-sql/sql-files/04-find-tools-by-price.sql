-- Your code here 
SELECT tools.name AS tool_name, price
FROM tools
WHERE price BETWEEN 14.67 AND 20.09
ORDER BY tool_name;