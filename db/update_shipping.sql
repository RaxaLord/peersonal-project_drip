UPDATE users 
SET first_name = $2, last_name = $3, address = $4, state = $5, zipcode = $6
WHERE user_id = $1;