CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    img VARCHAR (1000),
    descript VARCHAR (500),
    price INT,
    pet_type TEXT
)

-- INSERT INTO product 
-- (img, descript, price, pet_type)

CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES product(id),
    quantity INT
   
   
)

-- CREATE TABLE product_cart(
--     product_cart_id SERIAL PRIMARY KEY,
--     cart_id INT REFERENCES cart(id)
-- )




CREATE TABLE invoice (
    id SERIAL PRIMARY KEY,
    cart_id REFERENCES cart(id)
)








-