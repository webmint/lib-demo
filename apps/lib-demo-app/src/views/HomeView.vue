<script setup lang="ts">
import { RouterLink } from 'vue-router'

const routerLinks = [
  {
    to: '/simple-js',
    text: 'Simple JS View'
  },
  {
    to: '/simple-ts',
    text: 'Simple TS View'
  },
  {
    to: '/combination',
    text: 'Combination View'
  },
  {
    to: '/multy-source',
    text: 'Multy Source View'
  },
  {
    to: '/vue-lib',
    text: 'Vue Lib View'
  }
];
</script>

<template>
  <main>
    <h1>TMG Lib Demo</h1>
    <ul>
      <li v-for="(link, index) in routerLinks">
        <router-link :to="link.to">
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </main>
</template>
