<script setup lang="ts">

import TheHeader from '@/components/compositions/TheHeader.vue';
import TheNavbar from '@/components/compositions/TheNavbar.vue';
</script>
<template>
    <div class="relative">
        
    <TheHeader />
    <TheNavbar />
    <main class="mx-auto grid grid-cols-12 ">
        
        <slot ></slot>
    </main>
    </div>
</template>