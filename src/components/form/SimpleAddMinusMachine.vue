<template>
  <button data-testid="minusBtn" @click.prevent="minus">-</button>
  <span> {{ counter }}</span>
  <button data-testid="plusBtn" @click.prevent="plus">+</button>
</template>
<script setup>
import { ref } from "vue";
const counter = ref("0");
const minus = () => {
  if (counter.value > 0) {
    counter.value--;
  }
};

const plus = () => {
  counter.value++;
};
</script>
<style scoped>
  button {
    font-size: 2em;
    padding: 20px;
    margin: 10px;
  }
</style>
