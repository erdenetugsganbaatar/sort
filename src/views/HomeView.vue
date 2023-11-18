<script setup>
import Visual from '../components/Visual.vue';
import { ref } from 'vue';

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

const sortArray = () => {
  const j = 1;
  let temp = array.value[j].order;
  array.value[j].order = array.value[j + 1].order;
  array.value[j + 1].order = temp;
  //   for (let i = 0; i < array.value.length; i++) {
  //     for (let j = 0; j < array.value.length - i - 1; j++) {
  //       if (array.value[j] > array.value[j + 1]) {
  //         let temp = array.value[j];
  //         array.value[j] = array.value[j + 1];
  //         array.value[j + 1] = temp;
  //       }
  //     }
  //   }
};
</script>

<template>
  <main>
    <Visual :array="array" />
    <button @click="sortArray">auto sort array</button>
  </main>
</template>

<style></style>
