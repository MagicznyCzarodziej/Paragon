<template>
  <v-ons-page>
    <div id="container">
      <div id="topBar">
        <div id="title">Paragon</div>
        <div id="thisMonth"><span id='thisMonthValue'>{{ spentThisMonthString }}</span>zł</div>
      </div>
      <div id="listContainer">
        <div class="list">
          <Product v-for="product in products" :key="product.id" :product="product"></Product>
        </div>
      </div>
      <AddProduct></AddProduct>
    </div>
  </v-ons-page>
</template>

<script>
import AddProduct from '@/components/AddProduct';
import Product from '@/components/Product';
import ApiService from '@/services/Api';
import moment from 'moment';

// function arabicToRomanWeek(number) {
//   switch (number) {
//     case 1: return 'I';
//     case 2: return 'II';
//     case 3: return 'III';
//     case 4: return 'IV';
//     case 5: return 'V';
//     default: return number;
//   }
// }

// function getWeekNumber(date) {
//   date = date ? moment(date, 'YYYY-MM-DD', true) : moment();
//   return date.week() - moment(date).startOf('month').week() + 1;
// }

export default {
  name: 'Home',
  components: {
    AddProduct,
    Product,
  },
  data() {
    return {
      products: [],
      spentThisMonth: 0,
    };
  },
  computed: {
    spentThisMonthString: function () { this.spentThisMonth.toFixed(2) },
  },
  async beforeCreate() {
    const date = moment().format('YYYY-MM');
    const response = await ApiService.getProductsByDate(date);
    this.products = await response.json();
    console.log(this.products);
    
/*
    let lastWeekNumber = 0;
    let spentThisMonth = 0;
    for (const product of products) {
      spentThisMonth += product.price * product.quantity;

      const week = getWeekNumber(product.date);
      if (week != lastWeekNumber && week > 2) {
        const month = moment().format('MMMM');
        const template = `
          <div class="monthDivider" style="overflow:auto">
            <span id="month" style="float: left">${month}</span>
            <span id="week" style="float: right">Tydzień ${arabicToRomanWeek(week - 1)}</span>
          </div>
        `;
        // const listDOM = Dom.findByClass('list')[0];
        // Dom.prepend(listDOM, template);
      }
      lastWeekNumber = week;
      // appendProduct(product);
    }*/
  },
};


</script>

<style lang="stylus">
@import "~@/styles/variables";
@import "~@/styles/fonts";

#container
  height 100%
  display grid
  grid-template-rows auto 1fr auto
  grid-template-areas "topBar"\
    "listConstainer"\
    "addProduct"
#topBar
  grid-area topBar
  background-color cMainGreen
  font-size 2.5rem
  color #fff
  font-family Bai Jamjuree
  box-shadow 0px 0 3px #000
  z-index 999
#title
  float left
  padding 0.4rem 1rem
  text-shadow 0px 0px 6px #000
#thisMonth
  float right
  padding 0.4rem 1rem
  background-color cDarkGreen
  text-shadow 0px 0px 6px #000
#month
  text-transform: capitalize

#listContainer
  grid-area listConstainer
  color #111
  overflow-y scroll
  // padding 0.5rem 0
  margin-bottom 7rem
.product
  display grid
  grid-template-columns auto auto 1fr auto
  grid-template-areas "itemProduct itemProduct itemProduct itemProduct itemValue"\
  "itemQuantity itemTimes itemPrice . itemValue"
  padding: 0.5rem 1rem
  &:nth-child(even)
    background-color #ddd
.name, .value
  grid-area itemProduct
  font-size 1.8rem
.quantity, .times, .price
  font-size 1rem
  color #555
.quantity
  grid-area itemQuantity
.times
  grid-area itemTimes
  margin 0 0.2rem
.price
  grid-area itemPrice
.value
  grid-area itemValue
  align-self center
.monthDivider
  font-size 1rem
  padding: 0.3rem 1rem
  color #fff
  text-align: left
  background-color #47584b
</style>
