import Product from './controller.js';

export default (app) => {
  app.get('/date/:date', async (req, res) => {
    const date = req.params.date;
    try {
      console.log("Query for " + date);
      const data = await Product.getByYearMonth(date);
      // console.log(data);
      res.json(data);
    } catch (error) {
      res.status(400).send('Invalid date format. Try YYYY-MM');
    }
  });
  app.post('/addProduct', async (req, res) => {
    try {
      const data = await Product.addProduct(req.body);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).send('Invalid query. Remember to define all values.');
    }
  });
  app.put('/editProduct', async (req, res) => {
    try {
      const data = await Product.editProduct(req.body);
      res.json(data);
    } catch (error) {
      res.status(400).send('Invalid query.');
    }
  });
};
