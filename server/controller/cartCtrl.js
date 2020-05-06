module.exports = {
  addToCart: async (req, res, next) => {
    try {
      const db = req.app.get('db');
      const { user_id } = req.session.user;
      const { product_id } = req.params;

      await db.add_to_cart([user_id, product_id]);
      res.sendStatus(200);
      console.log('added item to cart');
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getCartInfo: async (req, res, next) => {
    try {
      const db = req.app.get('db');
      const { user_id } = req.session.user;
      const cart = await db.get_cart_info([user_id]);

      res.status(200).send(cart);
      console.log('got cart info');
    } catch (error) {
      console.log('error getting cart', error);
      res.status(500).send(error);
    }
  },

  getCartTotal: async (req, res, next) => {
    try {
      const db = req.app.get('db');
      const { user_id } = req.session.user;
      const cart = await db.get_cart_total([user_id]);

      res.status(200).send(cart);
      console.log('got cart total');
    } catch (error) {
      console.log('error getting cart', error);
      res.status(500).send(error);
    }
  },

  deleteItem: async (req, res, next) => {
    try {
      const db = req.app.get('db');
      // console.log(req.params.cart_id);
      await db.delete_item(req.params.cart_id);

      res.sendStatus(200);
      console.log('deleted item from cart');
    } catch (error) {
      res.status(500).send('dont work', error);
    }
  },
};
