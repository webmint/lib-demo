<script setup lang="ts">
import { ref } from 'vue';
import { UiInput } from '@demotmg/vue-lib';

const test = ref('test');
</script>

<template>
<main>
  <h1>Vue Lib View</h1>
  <UiInput v-model="test" />
  <p>Test: {{ test }}</p>
</main>
</template>

<style scoped>

</style>
