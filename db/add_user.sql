INSERT INTO users
    (email, first_name, last_name, address, state, zipcode, password)
VALUES
    ($1, $2, $3, $4, $5, $6, $7);

SELECT *
FROM users
WHERE email = $1;