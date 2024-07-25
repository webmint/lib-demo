<script setup lang="ts">
import { computed } from 'vue';
import { reverseString } from '@demotmg/multy-source/text'
import UiInput from "./UiInput.vue";

const model = defineModel<string>();

const result = computed(() => reverseString(model.value ?? ''));
</script>

<template>
<div>
  <UiInput v-model="model" />
  <p>Reverse: {{ result }}</p>
</div>
</template>

<style scoped>

</style>
