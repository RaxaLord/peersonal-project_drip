SELECT SUM(price)
FROM cart
    JOIN users ON users.user_id = cart.user_id
    JOIN products ON products.product_id = cart.products_id
WHERE users.user_id = $1;