<script setup lang="ts">
import { computed } from 'vue';
import { multiplyAdd } from '@demotmg/combination';

const result = computed(() => multiplyAdd(2, 3));
</script>

<template>
<main>
  <h1>Combination View</h1>
  <p>Result: {{ result }}</p>
</main>
</template>

<style scoped>

</style>
