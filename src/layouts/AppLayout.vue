<script setup lang="ts">

import TheHeader from '@/components/compositions/TheHeader.vue';
import TheNavbar from '@/components/compositions/TheNavbar.vue';
import TheFooter from '@/components/compositions/TheFooter.vue';
import Toast from '@/components/Toast.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import { onMounted, provide, ref } from 'vue';
import { useCategory } from '@/composables/useCategory';
import { useItem } from '@/composables/useItem';
const triggers = ref<string[]>([]);
provide('triggers', triggers)

const {getAllCategories, loading:loadingCategories} = useCategory();
const {getAllItems, loading:loadingItems} = useItem();
onMounted(()=> {
    getAllCategories();
    getAllItems();
})
</script>
<template>
    <div v-if="loadingCategories && loadingItems" class="fixed w-full h-full flex justify-center items-center bg-gray-50 dark:bg-gray-950 z-50">
        <LoaderComponent :message="'Cargando algo fantástico...' "/>
    </div>
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