import config from './config.js';
import setup from './setup.js';
import { getWeekNumber, arabicToRomanWeek, appendProduct, addToTotalValue } from './utils.js';

window.onload = async () => {
  console.log("Loaded.");
  setup();
  listCurrentMonth();
}

async function listCurrentMonth() {
  const date = moment().format('YYYY-MM');
  const response = await fetch(config.api + `date/${date}`);
  const products = await response.json();

  let lastWeekNumber = 0;
  let spentThisMonth = 0;
  for (const product of products) {
    spentThisMonth += product.price * product.quantity;

    const week = getWeekNumber(product.date);
    if (week != lastWeekNumber && week > 2) {
      const month =  moment().format('MMMM');
      const template = `
        <div class="monthDivider" style="overflow:auto">
          <span id="month" style="float: left">${month}</span>
          <span id="week" style="float: right">Tydzień ${arabicToRomanWeek(week-1)}</span>
        </div>
      `;
      const listDOM = Dom.findByClass('list')[0];
      Dom.prepend(listDOM, template);
    }
    lastWeekNumber = week;
    appendProduct(product);
  }
  addToTotalValue(spentThisMonth);
}