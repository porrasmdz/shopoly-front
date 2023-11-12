<script setup lang="ts">

import HomeHero from '@/components/compositions/HomeHero.vue';
import HomeBadges from '@/components/compositions/HomeBadges.vue';
import HomeCategories from '@/components/compositions/HomeCategories.vue';
import HomeSlider from '@/components/compositions/HomeSlider.vue';
import HomeOffer from '@/components/compositions/HomeOffer.vue';
import RecommendedProducts from '@components/compositions/RecommendedProducts.vue';
import { useItem } from '@/composables/useItem';
import { onMounted } from 'vue';

const { data:productData ,getAllItems } = useItem();
const maxRecommendedItems = 8
onMounted(() => {
    getAllItems()
})
</script>
<template>
    <HomeHero class="col-span-12" />

    <HomeBadges class="col-span-12" />

    <h2 class="col-span-12 mx-auto mb-5 max-w-[1200px] px-5 flex w-full">
        COMPRAS POR CATEGORÍA

    </h2>
    <HomeCategories class="col-span-12" />

    <!-- /Slider  -->
    <h2 class="col-span-12 mx-auto mt-10 mb-5 max-w-[1200px] px-5 w-full">LO MÁS RECIENTE</h2>
    <!-- Slider  -->

    <HomeSlider class="col-span-12" />
    <HomeOffer />

    <p class="col-span-12 mx-auto mt-10 mb-5 max-w-[1200px] px-5">RECOMENDADO PARA TI</p>
    <RecommendedProducts class="col-span-12" v-if="productData.length > maxRecommendedItems" 
    :recommended-products="productData" :max-items="maxRecommendedItems" />
</template>