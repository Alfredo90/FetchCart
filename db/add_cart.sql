INSERT INTO cart (product_id)
VALUES($1);
-- SELECT * FROM cart;

SELECT * FROM product p
JOIN cart c ON p.id = c.product_id;