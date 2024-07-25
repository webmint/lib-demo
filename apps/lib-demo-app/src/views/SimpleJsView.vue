<script setup lang="ts">
import { computed } from 'vue';
import { addNum } from '@demotmg/simple-js';

const result = computed(() => addNum(1, 2));
</script>

<template>
  <main>
    <h1>Simple JS View</h1>
    <p>Result: {{ result }}</p>
  </main>
</template>
