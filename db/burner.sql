-- FIRST CREATE A TABLE FOR CARTED ITEMS
CREATE TABLE cart
(
    cart_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    products_id INT REFERENCES products(product_id),
);

-- NOW INSERT THE USER + PRODUCT INTO CART (ADDTOCART FUNCTION)
INSERT INTO cart
    (user_id, product_id)
VALUES
    ($2, $3)
;

-- DUMMY DATA
INSERT INTO cart
    (user_id, products_id)
VALUES
    (6, 7),
    (2, 2),
    (8, 1),
    (8, 3),
    (12, 13);


-- SELECT USER FRIST_NAME + PRODUCT IMG, NAME & PRICE
SELECT users.user_id, users.first_name, products.img, products.name, products.price
FROM cart
    JOIN users ON users.user_id = cart.user_id
    JOIN products ON products.product_id = cart.products_id
WHERE users.user_id = 8;

-- GET THE SUM OF THE CART BY USER
SELECT SUM(price)
FROM cart
    JOIN users ON users.user_id = cart.user_id
    JOIN products ON products.product_id = cart.products_id
WHERE users.user_id = 8;



-- SHORTCUT
SELECT *
FROM cart;
SELECT *
FROM users;
SELECT *
FROM products;