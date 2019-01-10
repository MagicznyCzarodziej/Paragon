import config from './config.js';
import { appendProduct, addToTotalValue } from './utils.js';

export default function () {
  moment.locale('pl');

  // AddProduct quantity counter
  const quantityMinus = document.getElementById('quantityMinus');
  const quantityPlus = document.getElementById('quantityPlus');
  const quantityInput = document.getElementById('addProductQuantity');

  quantityMinus.addEventListener('click', function (event) {
    if(quantityInput.value > 1) quantityInput.value--;
  });
  quantityPlus.addEventListener('click', function (event) {
    quantityInput.value++;
  });


  // Add product
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const name = document.getElementById('addProductName').value;
    const quantity = parseInt(document.getElementById('addProductQuantity').value);
    const price = parseFloat(document.getElementById('addProductPrice').value.replace(',','.'));
    const type = "default";
    const data = JSON.stringify({ name, quantity, price, type });

    const response = await fetch(config.api + 'addProduct', {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      }
    });
    const product = await response.json();

    clearInputs();
    appendProduct(product);
    const value = product.price * product.quantity;
    addToTotalValue(value);
  });
}

function clearInputs() {
  document.getElementById('addProductName').value = '';
  document.getElementById('addProductQuantity').value = 1;
  document.getElementById('addProductPrice').value = '';
}
