<script setup>
import Visual from '../components/Visual.vue';
import { ref } from 'vue';

const array = ref([-1, 2, 3, 0, 10, -4]);

// const sortArray = () => {
//   for (let i = 0; i < array.value.length; i++) {
//     for (let j = 0; j < array.value.length - i - 1; j++) {
//       if (array.value[j] > array.value[j + 1]) {
//         let temp = array.value[j];
//         array.value[j] = array.value[j + 1];
//         array.value[j + 1] = temp;
//       }
//     }
//   }
// };
</script>

<template>
  <main>
    <Visual :array="array" />
    <button @click="sortArray">auto sort array</button>
  </main>
</template>

<style></style>
