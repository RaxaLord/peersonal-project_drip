module.exports = {
  getAllProducts: async (req, res, next) => {
    try {
      const db = req.app.get('db');
      const products = await db.select_all_products();

      res.status(200).send(products);
      console.log('hit all products');
    } catch (error) {
      console.log('error getting products', error);
      res.status(500).send(error);
    }
  },

  getProduct: async (req, res, next) => {
    try {
      const db = req.app.get('db');
      const product = await db.select_product(req.params.id);

      res.status(200).send(product);
      console.log('got the goods!');
    } catch (err) {
      console.log('error getting product', err);
      res.status(500).send(err);
    }
  },

  getByType: async (req, res, next) => {
    try {
      const db = req.app.get('db');
      const products = await db.select_product_type(req.params.type);

      res.status(200).send(products);
    } catch (err) {
      console.log('error getting products', err);
      res.status(500).send(err);
    }
  },

  orderByNew: async (req, res, next) => {
    try {
      const db = req.app.get('db');
      const products = await db.new_products();

      res.status(200).send(products);
      console.log('products in order by new');
    } catch (err) {
      console.log('error sorting products');
      res.status(500).send(err);
    }
  },
};
