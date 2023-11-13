<script setup lang="ts">

import TheHeader from '@/components/compositions/TheHeader.vue';
import TheNavbar from '@/components/compositions/TheNavbar.vue';
import TheFooter from '@/components/compositions/TheFooter.vue';
import Toast from '@/components/Toast.vue';
import { provide, ref } from 'vue';
const triggers = ref<string[]>([]);
provide('triggers', triggers)
</script>
<template>
  
    <TheHeader />
    <TheNavbar />
    <main v-bind="$attrs" class="mx-auto grid grid-cols-12 min-h-[90vh]">
        
        <slot ></slot>
    </main>
    <TheFooter />
    
    <div class="fixed bottom-0 right-0 m-8 z-50">
        <Toast  v-for="(trigger,index) in triggers" :key="`succ-${index}-${trigger}`" :alertType="trigger" />
    </div>
    

</template>