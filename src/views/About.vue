<script setup lang="ts">
// import AboutHero from '@/components/compositions/AboutHero.vue';
// import AboutMissionValues from "@components/compositions/AboutMissionValues.vue";

import { views } from "@assets/settings.json"
import AboutSections from '@/components/compositions/AboutSections.vue';

</script>
<template>
    <AboutSections v-for="(section, index) in views.about.sections" :key="`${section.type}-${index}`" 
   :section="section"/>
    <!-- <AboutHero class="col-span-12" />
    <AboutMissionValues class="col-span-12"/> -->
</template>