<script setup>
import { ref, computed } from 'vue';

import sleep from '../utils/sleep';
import { computeElementHeight } from '../utils/element';

const array = ref([
  {
    value: -1,
    key: 0,
    order: 0,
  },
  {
    value: 2,
    key: 1,
    order: 1,
  },
  {
    value: 3,
    key: 2,
    order: 2,
  },
  {
    value: 0,
    key: 3,
    order: 3,
  },
  {
    value: 10,
    key: 4,
    order: 4,
  },
  {
    value: -4,
    key: 5,
    order: 5,
  },
]);

const i = ref(0);
const j = ref(0);

const elementWidth = computed(() => {
  // 600 is width of container
  return 600 / array.value.length;
});
const arrayWithHeight = computed(() => {
  const arrayValues = array.value.map(el => el.value);
  const min = Math.min(...arrayValues);
  const max = Math.max(...arrayValues);
  return array.value.map(el => ({
    ...el,
    height: computeElementHeight({ min, max, value: el.value }),
    style: {
      width: `${elementWidth.value}px`,
      left: `${elementWidth.value * el.order}px`,
    },
  }));
});

const sortArray = async () => {
  const tempArray = [...array.value];
  for (i.value = 0; i.value < tempArray.length; i.value++) {
    for (j.value = 0; j.value < tempArray.length - i.value - 1; j.value++) {
      if (tempArray[j.value].value > tempArray[j.value + 1].value) {
        const tempOrder = tempArray[j.value].order;
        tempArray[j.value].order = tempArray[j.value + 1].order;
        tempArray[j.value + 1].order = tempOrder;
        const tempVal = tempArray[j.value];
        tempArray[j.value] = tempArray[j.value + 1];
        tempArray[j.value + 1] = tempVal;
      }
      await sleep(1000);
    }
  }
};
</script>

<template>
  <main>
    <div class="container">
      <div class="element" v-for="el in arrayWithHeight" :style="el.style" :key="el.key">
        <div class="column" :style="`height: ${el.height}%`"></div>
        <span class="number">{{ el.value }}</span>
      </div>
      <div>
        <div v-for="pointerIndex in [i, j]" class="pointer" :style="`left: ${elementWidth * Math.min(pointerIndex, array.length - 1) + elementWidth / 2}px`">
          {{ pointerIndex }}
        </div>
      </div>
    </div>
    <button @click="sortArray">auto sort array</button>
  </main>
</template>

<style scoped>
.container {
  width: 600px;
  height: 200px;
  margin-bottom: 50px;
  display: flex;
  background-color: aliceblue;
  position: relative;
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
  .pointer {
    position: relative;
    top: 100%;
  }
}
</style>
