<template>
  <button @click.prevent="increment">
    {{ count }}
  </button>
</template>
<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  initCount: {
    type: Number,
    default: 0
  }
});

const count = ref(props.initCount);
const increment = () => {
  count.value ++;
};
</script>
