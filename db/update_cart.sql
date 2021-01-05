UPDATE cart 
SET quantity = $2 
WHERE product_id = $1;
-- SELECT * FROM cart;
SELECT * FROM product p
JOIN cart c ON p.id = c.product_id;