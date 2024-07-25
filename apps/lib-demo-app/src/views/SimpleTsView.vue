<script setup lang="ts">
import { computed } from 'vue';
import { multiply } from '@demotmg/simple-ts';

const result = computed(() => multiply(2, 2));
</script>

<template>
  <main>
    <h1>Simple JS View</h1>
    <p>Result: {{ result }}</p>
  </main>
</template>
