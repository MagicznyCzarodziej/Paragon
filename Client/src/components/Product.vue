<template>
  <div class="product" :data-type="product.type" :data-date="product.date">
    <div class="name">{{ product.name }}</div>
    <div class="quantity">{{ product.quantity }}</div>
    <div class="times">&times;</div>
    <div class="price">{{ product.price }}</div>
    <div class="value">{{ product.value }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['product'],
};
</script>

<style lang="stylus" scoped>

</style>
