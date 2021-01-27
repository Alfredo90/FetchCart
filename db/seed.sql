CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    img VARCHAR (1000),
    descript VARCHAR (500),
    price Float(2),
    animal TEXT,
    type TEXT
)



CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES product(id),
    quantity INT NOT NULL
    
   
   
)









--- CREATE TABLE product (
--     id SERIAL PRIMARY KEY,
--     img VARCHAR (1000),
--     descript VARCHAR (500),
--     price INT,
--     animal TEXT,
--     type TEXT
-- )

-- INSERT INTO product 
-- (img, descript, price, animal, type)
-- VALUES
-- ('https://images-na.ssl-images-amazon.com/images/I/71fwkZg9m6L._AC_SY679_.jpg','Royal Canin Small Adult Breed' , 18.99 , 'dog', 'food'),
-- ('https://assets.petco.com/petco/image/upload/f_auto,q_auto/1521691-center-1', 'Royal Canin Small Puppy Breed', 19.99, 'dog', 'food' ),
-- ('https://www.pncstores.com/wp-content/uploads/2019/10/Royal-Canin%C2%AE-Breed-Health-Nutrition-Dachshund-Adult-Dog-Food.png', 'Royal Canin Dachshund Adult Breed',19.99, 'dog', 'food'),
-- ('https://cdn11.bigcommerce.com/s-47pf20zleo/images/stencil/1280x1280/products/1321/4040/German_Shepherd_Adult_Dry_Dog_Food__77898.1543375683.png?c=2', 'Royal Canin German Sherpard Adult Breed',25.99, 'dog', 'food' ),
-- ('https://www.hillspet.com/content/dam/pim/hills/en_us/sd/dry/sd-canine-adult-dry-productShot_zoom.jpg', 'Hills Science Diet Adult 1-6', 22.99, 'dog', 'food'),
-- ('https://products.blains.com/600/131/1318272.jpg', 'Hills Science Diet Adult Larger Breed', 30.99, 'dog', 'food' ),
-- ('https://www.hillspet.com/content/dam/pim/hills/en_us/sd/dry/sd-canine-puppy-large-breed-lamb-meal-brown-rice-recipe-dry-productShot_zoom.jpg', 'Hills Science Diet Puppy Larger Breed', 22.99,'dog','food'),
-- ('https://cdn.shopify.com/s/files/1/0812/3573/products/34977-1557517938_800x.jpg?v=1589221844', 'Hills Science Diet Small Paws Adult 1-6', 17.99, 'dog','food'),
-- ('https://www.shopmyexchange.com/products/images/xlarge/1829426_0000.jpg', 'WholeHearted Small Breed Adult', 10.99, 'dog','food'),
-- ('https://assets.petco.com/petco/image/upload/f_auto,q_auto/2582201-center-1','WholeHearted Beef & Peas All Life Stages',9.99, 'dog','food'),
-- ('https://assets.petco.com/petco/image/upload/f_auto,q_auto/2739327-Center-1', 'WholeHearted Lamb & Lentil All Life Stages', 9.99,'dog','food'),
-- ('https://www.shopmyexchange.com/products/images/xlarge/1411759_0000.jpg', 'WholeHearted Chicken & Peas All Life Stages', 9.99, 'dog', 'food')
-- -- -- /////////////////Dog Toys
-- ('https://assets.petco.com/petco/image/upload/f_auto,q_auto/1434489-center-1', 'Kong Classic Dog Toy', 7.99, 'dog','toy'),
-- ('https://cdn.shoplightspeed.com/shops/636191/files/22508768/600x600x2/godog-large-dragon-dog-toy-coral.jpg', 'GoDog Dragon Dog Toy', 11.99, 'dog','toy'),
-- ('https://www.whitedogbone.com/assets/images/go-dog-baby-dragon-magenta.jpg', 'GoDog Baby Dragon Dog Toy', 13.99, 'dog','toy'),
-- ('https://s7d2.scene7.com/is/image/PetSmart/5280861_alt1?$pdp-placeholder-desktop$', 'Mighty Microfiber Ball Duck Dog Toy', 18.99, 'dog','toy'),
-- ('https://cdn.webshopapp.com/shops/188501/files/104436857/400x400x2/trixie-plush-dog-toy-monkey.jpg', 'Trixie Plush Monkey Dog Toy', 7.99, 'dog','toy'),
-- ('https://s.yimg.com/aah/entirelypets/kong-braidz-monkey-plush-dog-chew-toy-small-20.jpg', 'Kong Braids Monkey Dog Chew Toy', 5.99, 'dog','toy'),
-- ('https://hottopic.scene7.com/is/image/HotTopic/13972001_hi?$pdp_hero_standard$', 'Star Wars Baby Yoda Squeaky Dog Toy', 15.99, 'dog','toy'),
-- ('https://assets.petco.com/petco/image/upload/f_auto,q_auto/2763773-center-1', 'Leaps & Bounds Play Plush Avocado Dog Toy', 5.99, 'dog','toy'),
-- ('https://s.yimg.com/aah/healthypetscom/bumble-ball-motorized-dog-toy-167.jpg', 'Bumble Ball Motorized Dog Toy', 16.99, 'dog','toy'),
-- ('https://www.max200.com/content/images/thumbs/0000915_nuts-for-knots-ball-dog-toy.jpeg', 'Knot Ball Dog Toy', 5.99, 'dog','toy')

-- -- //////////CAT FOOD
-- ('https://assets.petco.com/petco/image/upload/f_auto,q_auto/654515-center-1', 'Hills Science Diet Adult 7+ Indoor',15.99, 'cat','food' ),
-- ('https://assets.petco.com/petco/image/upload/f_auto,q_auto/2504341-center-1', 'Hills Science Diet Adult 1-6', 15.99, 'cat','food' ),
-- ('https://media.tractorsupply.com/is/image/TractorSupplyCompany/1400150?$456$', 'Hills Science Diet Hairball Control Adult', 18.99, 'cat','food'),
-- ('https://www.hillspet.com/content/dam/pim/hills/en_us/sd/dry/sd-feline-adult-multiple-benefit-dry-productShot_zoom.jpg', 'Hills Science Diet Multiple Benefit Adult', 19.99, 'cat','food'),
-- ('https://vetproductsdirect.com.au/media/catalog/product/cache/22/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/h/c/hcsssa_1.jpg', 'Hills Science Diet Sensitive Stomach & Skin Adult', 19.99, 'cat','food'),
-- ('https://images-na.ssl-images-amazon.com/images/I/51O-XWCd4dL._AC_.jpg', 'Blue Buffalo Indoor Health Adult', 13.99, 'cat','food' ),
-- ('https://images-na.ssl-images-amazon.com/images/I/71V-50TkklL._AC_SL1500_.jpg', 'Blue Buffalo Multi-Cat Health Adult', 16.99,'cat','food'),
-- ('https://images-na.ssl-images-amazon.com/images/I/71y8O9WSKEL._AC_SL1500_.jpg', 'Blue Buffalo Healthy Aging Adult 7+', 19.99, 'cat','food'),
-- ('https://i5.walmartimages.com/asr/f9543388-8658-48e8-a382-1111bee78698_1.52536af0e34343044b8465334e19009b.jpeg', 'Blue Buffalo Weight Control Adult', 17.99, 'cat','food'),
-- ('https://target.scene7.com/is/image/Target/GUEST_0a9b1ba6-26c7-41eb-9d58-3c269df65331?wid=488&hei=488&fmt=pjpeg', 'Blue Buffalo Healthy Living Adult', 17.99, 'cat','food'),
-- ('https://s7d2.scene7.com/is/image/PetSmart/5280854', 'Nulo Limited Ingredient Diet Cat & Kitten', 22.99, 'cat','food'),
-- ('https://s7d2.scene7.com/is/image/PetSmart/5257820', 'Nulo Indoor Cat Adult', 21.99, 'cat','food'),
-- ('https://s7d2.scene7.com/is/image/PetSmart/5280916', 'Nulo Senior Cat', 23.99, 'cat','food'),
-- ('https://s7d2.scene7.com/is/image/PetSmart/5257823', 'Nulo Adult Cat', 21.99, 'cat','food'),
-- ('https://i5.walmartimages.com/asr/6614a767-2baf-48f0-9423-c49b106e491e.df02c278829d6a2cd41de12f7cf0c879.jpeg', 'Nulo Hairball Management Adult', 21.99, 'cat','food' )

-- -- ////////////////CAT TOYS
-- ('https://i5.walmartimages.com/asr/11f1fb8e-4019-4f04-b1c6-979963a6dc88_1.ad72eb18b761f8589d77fc2490bd26a3.png?odnWidth=612&odnHeight=612&odnBg=ffffff', 'Feather Teaser Want Cat Toy', 4.99, 'cat','toy'),
-- ('https://assets.petco.com/petco/image/upload/f_auto,q_auto/1158716-right-1', 'Play-N-Squeak Mouse Hunter Cat Toy', 6.99, 'cat','toy'),
-- ('https://cdn.shopify.com/s/files/1/2161/7567/products/product-image-246614379_1024x1024.jpg?v=1571708693', 'Colorful Cat Toy Ball', 9.99, 'cat','toy'),
-- ('https://target.scene7.com/is/image/Target/GUEST_2e7b87d8-252b-4964-9c05-a533f348efb9?wid=488&hei=488&fmt=pjpeg', 'Catit Play Circuit Ball Cat Toy With Scracth Pad', 24.99, 'cat','toy'),
-- ('https://cdn11.bigcommerce.com/s-16a2c/images/stencil/500x500/attribute_rule_images/2027_source_1608493956.jpg', 'Sparkle Ball Cat Toy', 2.99, 'cat','toy'),
-- ('https://www.petandgarden.com.au/4954-thickbox_default/petobsessed-jingle-ball-cat-toy.jpg', 'Jingle Ball Cat Toy', 2.99, 'cat','toy'),
-- ('https://i.etsystatic.com/18455851/r/il/367cfb/2104554230/il_570xN.2104554230_rw06.jpg', 'Pink Bouncy Bells & Feather Wand Cat Toy', 8.99, 'cat','toy'),
-- ('https://target.scene7.com/is/image/Target/GUEST_07893e6e-9c9b-4c6f-8bbd-ba027bea81ea?wid=488&hei=488&fmt=pjpeg', 'Interactive Plush Cat Wobble N Go', 16.99, 'cat','toy'),
-- ('https://assets.petco.com/petco/image/upload/f_auto,q_auto/2694499-center-1', 'Leaps & Bounds Crinkle Fish Cat Toy', 1.99, 'cat','toy'),
-- ('https://cdn.shopify.com/s/files/1/1640/4727/products/deziroo_wiggly_pong_web-shop-04_grande.png?v=1579997913', 'Wiggly Pong Cat Toy', 3.99, 'cat','toy')


