export default {
  Query: {
    allProducts: (parent, args, { models }) => models.Product.findAll(),
    getProduct: (parent, { id }, { models }) => models.Product.findOne({ where: { id } }),
    getProductsByMonth: (parent, { month }, { models }) => {
      let year = 2018; // TODO: get current year (moment.js)
      const currentMonth = 12; // TODO: get current month (moment.js)
      if (month > currentMonth) year--;
      return models.Product.findAll({
        where: models.sequelize.where(models.sequelize.fn('MONTH', models.sequelize.col('date')), month)
      });
    },
  },

  Mutation: {
    addProduct: (parent, { name, quantity, price, date }, { models }) =>
      models.Product.create({ name, quantity, price, date }),
  }
}
