<script setup>
import { defineProps } from 'vue';
import { computed } from 'vue';
import { computeElementHeight } from '../utils/element';

const { array } = defineProps(['array']);

const arrayWithHeight = computed(() => {
  const min = Math.min(...array);
  const max = Math.max(...array);
  return array.map(value => ({
    value,
    height: computeElementHeight({ min, max, value }),
  }));
});
</script>

<template>
  <p>{{ array }}</p>
  <div class="container">
    <div class="element" v-for="(el, index) in arrayWithHeight" :style="`order: ${index}`">
      <div class="column" :style="`height: ${el.height}%`"></div>
      <span class="number">{{ el.value }}</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 600px;
  height: 200px;
  display: flex;
  background-color: aliceblue;
  > :not(:last-child) {
    margin-right: 5px;
  }
}
.element {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  transition: order 1s ease;
  .column {
    background-color: green;
  }
  .number {
    color: white;
    background-color: black;
    height: 20px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
}
</style>
