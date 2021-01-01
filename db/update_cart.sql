UPDATE cart 
SET quantity = $2 
WHERE product_id = $1;
SELECT * FROM cart;