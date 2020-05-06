DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS cart;

-- table for users --
CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(120),
    first_name VARCHAR(80),
    last_name VARCHAR(80),
    address VARCHAR(200),
    state VARCHAR(2),
    zipcode VARCHAR(10),
    password TEXT
);

-- dummy user data --
INSERT INTO users
    (email, first_name, last_name, address, state, zipcode, password)
VALUES
    ('imraxa@gmail.com', 'Raxa', 'Lord', '1123 4th Ave S', 'AZ', '85303', 'password1'),
    ('imsally@gmail.com', 'Sally', 'Howard', '5224 Washington St E', 'WA', '89765', 'password2'),
    ('imandy@gmail.com', 'Andy', 'Worhal', '98656 Art District Ln N', 'CA', '92102', 'password3'
);

-- table for products —-
CREATE TABLE products
(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    description TEXT,
    type VARCHAR(80),
    size VARCHAR(20),
    quantity INT,
    price DECIMAL,
    img TEXT
);

-- dummy product data --
INSERT INTO products
    (name, description, type, size, quantity, price, img)
VALUES
    ('TK/Supreme Box Logo', 'Murikami Supreme Collab Shirt', 'shirt', 'medium', 5, 60.00, 'https://media.gq.com/photos/5e9f1e411a12b300089d0697/master/pass/gq%20april%202020%20supreme%20releasing%20covid%20relief%20tee.jpg'),
    ('Adidas Yeezy 350 v2', 'Yeezy v2 Linen', 'shoe', '7.5', 2, 220.00),
    ('BAPE All Over Print Hoodie', 'BAPE F/W 2018 All Over Print', 'sweater', 'large', 3, 380.00
);

-- select all users and products to view --
SELECT *
FROM users;
SELECT *
FROM products;

-- FIRST CREATE A TABLE FOR CARTED ITEMS --
CREATE TABLE cart
(
    cart_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    products_id INT REFERENCES products(product_id),
);

-- DUMMY DATA
INSERT INTO cart
    (user_id, product_id)
VALUES
    (6, 7),
    (2, 2),
    (8, 1),
    (8, 3),
    (12, 13);