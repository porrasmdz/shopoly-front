<script setup lang="ts">
import BaseHero from '@components/BaseHero.vue';
import { contactbg } from '@/constants/assets';
</script>
<template>
    <BaseHero :image="contactbg">
        <h2 class="text-4xl font-bold sm:text-5xl">Contact us</h2>
        <p class="mx-auto pt-3 text-xs lg:w-3/5 lg:pt-5 lg:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur aperiam natus, nulla, obcaecati nesciunt, itaque
            adipisci earum ducimus pariatur eaque labore.
        </p>

    </BaseHero>
</template>