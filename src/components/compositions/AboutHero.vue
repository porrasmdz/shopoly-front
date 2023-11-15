<script setup lang="ts">
import BaseHero from '@components/BaseHero.vue';
import { about_bg } from '@/constants/assets';

defineProps<{
  title?: string,
  subtitle?: string 
}>();
</script>
<template>
    <BaseHero :image="about_bg">
        <h1 class="text-4xl font-bold sm:text-5xl">{{title ?? '¿Quiénes Somos?'}}</h1>
            <p class="mx-auto pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-base">
              {{  subtitle ?? `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur aperiam natus, nulla, obcaecati nesciunt, itaque
              adipisci earum ducimus pariatur eaque labore.`}}
            </p>
    </BaseHero>
</template>