<script setup lang="ts">
import AboutHero from '@/components/compositions/AboutHero.vue';
import { ISection } from '@/interfaces/ISection';
import AboutMissionValues from "@components/compositions/AboutMissionValues.vue"; 

defineProps<{
    section: ISection,
}>();
</script>
<template>
    <AboutHero v-if="section.type==='hero'"  class="col-span-12" />
    <AboutMissionValues v-else-if="section.type==='mission-vision'" class="col-span-12"/>
</template>
