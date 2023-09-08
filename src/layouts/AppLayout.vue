<script setup lang="ts">

import TheHeader from '@/components/compositions/TheHeader.vue';
import TheNavbar from '@/components/compositions/TheNavbar.vue';
import TheFooter from '@/components/compositions/TheFooter.vue';
</script>
<template>
        
    <TheHeader />
    <TheNavbar />
    <main class="mx-auto grid grid-cols-12 min-h-[90vh]">
        
        <slot ></slot>
    </main>
    <TheFooter />
    

</template>