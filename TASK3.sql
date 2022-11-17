SELECT broker.ID, broker.Name, customer.ID, customer.Name, customer.Amount
FROM broker INNER JOIN customer ON broker.ID=customer.broker_ID
ORDER BY broker.Name;