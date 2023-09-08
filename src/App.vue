<script lang="ts" setup>
import { provide, shallowRef } from "vue";
import router from "./router/index";
import layouts from '@/layouts';
import {  RouteLocationNormalized } from "vue-router";

  const layout = shallowRef('div');

  router.afterEach((to: RouteLocationNormalized) => {
      let key = to.meta.layout;  
      layout.value = layouts[key] || 'div';
    });

  provide('app:layout', layout)
</script>
<template>
  <component :is="layout || 'div'">
    <router-view />
  </component>
</template>

<style scoped>

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
@/layouts/layouts