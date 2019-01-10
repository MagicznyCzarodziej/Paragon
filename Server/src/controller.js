import models from './db/models';
import moment from 'moment';

export default {
  async getByYearMonth(date) {
    const format = 'YYYY-MM'
    const year = moment(date, format).year() || null;
    const month = moment(date, format).month()+1 || null;
    if (!year || !month) throw new Error("Invalid date format");
    return await models.Product.findAll({
      where: models.sequelize.and(
        models.sequelize.where(models.sequelize.fn('YEAR', models.sequelize.col('date')), year),
        models.sequelize.where(models.sequelize.fn('MONTH', models.sequelize.col('date')), month)
      )
    });
  },
  async addProduct(data) {
    const { name, quantity, price, type } = data;
    const date = moment().format("YYYY-MM-DD")
    return await models.Product.create({
      name: name,
      quantity: quantity,
      price: price,
      type: type,
      date: date,
    });
  },
  async editProduct(data) {
    const { id, name, quantity, price, type, date } = data;
    const product = await models.Product.findOne({ where: { id }});

    if (!product) throw new Error('No item with given id');
    else return await product.update({
      name: name,
      quantity: quantity,
      price: price,
      type: type,
      date: date,
    });
  },
}
