<script setup lang="ts">
import BaseIcon from '@components/BaseIcon.vue';


</script>
<template>
  <nav class="mx-auto w-full mt-4 max-w-[1200px] px-5">
    <ul class="flex items-center gap-2">
      <li class="cursor-pointer">
        <router-link to="/">
          <BaseIcon icon="home" />
        </router-link>
      </li>

      <li class="flex items-center gap-2">
        <span class="mx-2 text-gray-500">
          <BaseIcon icon="chevron-right" />
        </span>
        <span class="text-gray-500">Catalog</span>

      </li>


    </ul>
  </nav>
  <!-- /breadcrumbs  -->
</template>