import config from '../config';

export default {
  getProductsByDate: async date => fetch(`${config.API_IP}date/${date}`),
  addProduct: async data => fetch(`${config.API_IP}addProduct`, {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  }),
};
