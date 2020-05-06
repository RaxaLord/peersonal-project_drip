const bcrypt = require('bcrypt');

module.exports = {
  login: async (req, res) => {
    const db = req.app.get('db');
    const { email, password } = req.body;
    const foundUser = await db
      .select_user(email)
      .catch((err) => console.log(err));

    if (!foundUser.length) {
      res.status(401).send('That user does not exist!');
    } else {
      const matchPasswords = await bcrypt
        .compare(password, foundUser[0].password)
        .catch((err) => console.log(err));

      if (matchPasswords) {
        req.session.user = {
          user_id: foundUser[0].user_id,
          first_name: foundUser[0].first_name,
          last_name: foundUser[0].last_name,
          address: foundUser[0].address,
          state: foundUser[0].state,
          zipcode: foundUser[0].zipcode,
        };
        res.status(200).send(req.session.user);
        console.log('user signed in');
      } else {
        res.status(401).send('Incorrect Credentials!');
      }
    }
  },

  register: async (req, res) => {
    const db = req.app.get('db');
    const {
      email,
      first_name,
      last_name,
      address,
      state,
      zipcode,
      password,
    } = req.body;
    const foundUser = await db
      .select_user(email)
      .catch((err) => console.log(err));
    // console.log(foundUser);

    if (foundUser.length > 0) {
      res.status(409).send('That user already exist! Please login');
    } else {
      const saltRounds = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const createdUser = await db.add_user([
        email,
        first_name,
        last_name,
        address,
        state,
        zipcode,
        hashedPassword,
      ]);
      req.session.user = {
        user_id: createdUser[0].user_id,
        first_name: createdUser[0].first_name,
        last_name: createdUser[0].last_name,
        address: foundUser[0].address,
        state: foundUser[0].state,
        zipcode: foundUser[0].zipcode,
      };
      res.status(200).send(req.session.user);
      console.log('user registered');
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send('logged out successfully');
    console.log('signed out');
  },

  userSession: (req, res) => {
    res.status(200).send(req.session.user);
    console.log('hit from redux!');
  },

  updateShipping: async (req, res, next) => {
    try {
      const db = req.app.get('db');
      const { first_name, last_name, address, state, zipcode } = req.body;
      const { user_id } = req.session.user;

      await db.update_shipping([
        user_id,
        first_name,
        last_name,
        address,
        state,
        zipcode,
      ]);

      res.sendStatus(200);
      console.log('updated address');
    } catch (error) {
      console.log('error updating name', error);
      res.status(500).send(error);
    }
  },
};
