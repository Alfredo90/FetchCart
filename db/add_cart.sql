INSERT INTO cart (product_id,quantity)
VALUES($1, $2);

-- SELECT * FROM cart;

SELECT * FROM product p
JOIN cart c ON p.id = c.product_id;