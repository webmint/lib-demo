<script setup lang="ts">
import { computed } from 'vue';
import { addMultiply } from '@demotmg/multy-source/math'
import { reverseString } from '@demotmg/multy-source/text';

const result = computed(() => addMultiply(3, 2));
const reversed = computed(() => reverseString('Hello World!'));
</script>

<template>
<main>
  <h1>Multy Source View</h1>
  <p>Result: {{ result }}</p>
  <p>Reversed: {{ reversed }}</p>
</main>
</template>

<style scoped>

</style>
