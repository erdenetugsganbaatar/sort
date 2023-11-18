<script setup>
import { defineProps } from 'vue';
import { computed } from 'vue';
import { computeElementHeight } from '../utils/element';

const { array } = defineProps(['array']);

const arrayByOrder = () => {
  return [...array].sort((a, b) => a.order - b.order).map(el => el.value);
};

const arrayWithHeight = computed(() => {
  const arrayValues = array.map(el => el.value);
  const min = Math.min(...arrayValues);
  const max = Math.max(...arrayValues);
  // 600 is width of container
  const width = 600 / array.length;
  return array.map(el => ({
    ...el,
    height: computeElementHeight({ min, max, value: el.value }),
    style: {
      width: `${width}px`,
      left: `${width * el.order}px`,
    },
  }));
});
</script>

<template>
  <p>{{ arrayByOrder() }}</p>
  <div class="container">
    <div class="element" v-for="el in arrayWithHeight" :style="el.style" :key="el.key">
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
  position: relative;
}
.element {
  position: absolute;
  transition: all 1s ease;
  height: 100%;
  left: 0;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
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
