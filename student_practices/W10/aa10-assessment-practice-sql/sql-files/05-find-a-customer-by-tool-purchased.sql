-- Your code here 
SELECT first_name, last_name, phone_number
FROM customers
JOIN purchases ON purchases.customer_id = customers.id
JOIN transactions ON transactions.purchase_id = purchases.id
JOIN tools ON transactions.tool_id = tools.id
WHERE tools.name = 'Pipe Cutter'
ORDER BY transactions.id DESC LIMIT 1;