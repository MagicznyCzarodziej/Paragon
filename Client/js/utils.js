function arabicToRomanWeek(number) {
  switch(number) {
    case 1: return 'I';
    case 2: return 'II';
    case 3: return 'III';
    case 4: return 'IV';
    case 5: return 'V';
    default: return number;
  }
}

function getWeekNumber(date) {
  date = date ? moment(date, 'YYYY-MM-DD', true) : moment();
  return date.week() - moment(date).startOf('month').week() + 1;
}

function appendProduct({ id, name, quantity, price, type, date }) {
  const listContainerDOM = Dom.id('listContainer');
  const listDOM = Dom.findByClass('list')[0];

  const value = (quantity * price).toFixed(2) + 'zł';
  price = price.toFixed(2) + 'zł';

  const productTemplate = `
    <div class="product" data-type="${type}" data-date="${date}">
      <div class="name">${name}</div>
      <div class="quantity">${quantity}</div>
      <div class="times">&times;</div>
      <div class="price">${price}</div>
      <div class="value">${value}</div>
    </div>
  `;
  Dom.prepend(listDOM, productTemplate);
}

function addToTotalValue(value) {
  let total = parseFloat(document.getElementById('thisMonthValue').innerHTML);
  total += value;
  document.getElementById('thisMonthValue').innerHTML = total.toFixed(2);
}

export { getWeekNumber, arabicToRomanWeek, appendProduct, addToTotalValue };
