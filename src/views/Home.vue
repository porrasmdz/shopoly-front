<script setup lang="ts">
//@ts-nocheck

import HomeSections from '@/components/compositions/HomeSections.vue';

import { views } from "@assets/settings.json"


</script>
<template>
    <!-- <span v-for="(section, index) in views.home.sections" :key="`${section.title}-${index}`">
        {{section}}
    </span> -->
    <HomeSections 
    v-for="(section, index) in views.home.sections" :key="`${section.title}-${index}`" 
   :section="section"/>
    
    
    <!-- <HomeHero  class="col-span-12" /> -->

    <!-- <HomeBadges class="col-span-12" /> -->

    <!-- <div class="col-span-12 mx-auto max-w-[1200px] w-full">
        <h2 class="w-full mb-5 flex px-5">
        COMPRAS POR CATEGORÍA
        </h2>
        <HomeCategories class="block" />
    </div> -->

    

</template>