SELECT product_id, img, name, size, price, cart_id
FROM cart
    FULL JOIN users ON users.user_id = cart.user_id
    FULL JOIN products ON products.product_id = cart.products_id
WHERE users.user_id = $1;