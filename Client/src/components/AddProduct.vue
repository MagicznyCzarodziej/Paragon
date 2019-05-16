<template>
  <div id="addProduct">
    <form action="">
      <input id="addProductName" type="text" size="3" placeholder="Produkt">
      <div id="addProductQuantityBox">
        <div id="quantityMinus" @click="decrementQuantity">-</div>
        <input id="addProductQuantity" type="number" :value="quantity">
        <div id="quantityPlus" @click="incrementQuantity">+</div>
      </div>
      <span>x</span>
      <input id="addProductPrice"
        type="text"
        size="2"
        pattern="\d{1,}((\.|,)\d{1,2})?"
        autocomplete="off"
        placeholder="Cena">
      <input id="addBtn" type="submit" value="+" @click="addProduct">
    </form>
  </div>
</template>

<script>
import Api from '@/services/Api';

export default {
  name: 'AddProduct',
  data() {
    return {
      name: '',
      quantity: 1,
      price: '',
      type: 'default',
    };
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) this.quantity--;
    },
    async addProduct() {
      const data = JSON.stringify({
        name: this.name,
        quantity: this.quantity,
        price: this.price,
        type: this.type,
      });

      const response = await Api.addProduct(data);
      const product = await response.json();

      this.clearInputs();
      // const newProduct = new Product();
      // const ComponentClass = Vue.extend(Product);
      // const instance = new ComponentClass();
      // instance.$mount() // pass nothing
      // this.$refs.container.appendChild(instance.$el)


      // appendProduct(product);
      // const value = product.price * product.quantity;
      // addToTotalValue(value);
    },
    clearInputs() {
      this.name = '';
      this.quantity = 1;
      this.price = '';
      this.type = 'default';
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~@/styles/variables";

#addProduct
  grid-area addProduct
  position: absolute;
  bottom: 0;
  width 100%
  background-color #333
  box-shadow 0px 0 3px #000
  form
    display grid
    grid-template-columns auto auto 1fr auto
    grid-template-areas "addName addName addName addName"\
    "addQuantity addX addPrice addButton"
  input
    font-size 1.8rem
    text-align center
    color #fff
    background none
    padding: 0.8rem
    border none
    // margin 0.5rem
    &:focus
      outline none
  span
    grid-area addX
    color #fff
    padding 0.8rem 0 0 1rem
    font-size 1.5rem
#addProductName
  grid-area addName
  background-color #222 !important;
#addProductQuantityBox
  grid-area addQuantity
  display inline-flex
#quantityMinus, #quantityPlus
  width 3.5rem
  color #fff
  font-size 2rem
  cursor pointer
  text-align center
  padding-top 0.6rem
  user-select none
#quantityMinus
  background-color #be0000;
#quantityPlus
  background-color cMainGreen;
#addProductQuantity
  width 2rem
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button
    -webkit-appearance: none;
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus
  -webkit-text-fill-color: #fff;
  transition: background-color 9000s cubic-bezier(1, 0, 1, 0) 0s;
#addProductPrice
  grid-area addPrice
#addBtn
  grid-area addButton
  cursor pointer
  color #fff
  background-color cDarkGreen !important
  width 4rem
  margin 0 !important
  &:hover
    background-color cMainGreen !important
    box-shadow none
</style>
