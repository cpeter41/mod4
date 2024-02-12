-- Your code here 
SELECT tools.name AS tool_name, price, quantity
FROM tools
JOIN transactions ON tools.id = transactions.tool_id
WHERE tool_name LIKE 'Pipe%'
ORDER BY tool_name, quantity;