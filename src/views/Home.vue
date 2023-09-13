<script setup lang="ts">
import {product_chairp, product_sofap, kitchenp, living_roomp, bedroomp, header_bg,outdoorp, product_detailp } from '@/constants/assets'

import HomeHero from '@/components/compositions/HomeHero.vue';
import HomeBadges from '@/components/compositions/HomeBadges.vue';
import HomeCategories from '@/components/compositions/HomeCategories.vue';
import HomeSlider from '@/components/compositions/HomeSlider.vue';
import HomeOffer from '@/components/compositions/HomeOffer.vue';
import RecommendedProducts from '@components/compositions/RecommendedProducts.vue';
import { IProduct } from '@/interfaces/IProduct';

const recommendedProducts: (IProduct)[] = [
    {
        image: product_chairp,
        name: 'Chair',
        price: 500.00,
        discount: 455.00,
        stars: 4,
        reviews: 38
    },
    {
        image: product_sofap,
        name: 'Sofa',
        price: 500.00,
        discount: 355.00,
        stars: 2,
        reviews: 58
    },
    {
        image: kitchenp,
        name: 'Guyer Kitchen',
        price: 200.00,
        discount: 55.00,
        stars: 5,
        reviews: 92
    },
    {
        image: living_roomp,
        name: 'Guyer Room',
        price: 500.00,
        discount: 55.00,
        stars: 4,
        reviews: 158
    },
    {
        image: bedroomp,
        name: 'Bedroom',
        price: 80.00,
        discount: 5.00,
        stars: 5,
        reviews: 58
    },
    {
        image: header_bg,
        name: 'Living Guyer',
        price: 500.00,
        discount: 355.00,
        stars: 3,
        reviews: 58
    },
    {
        image: outdoorp,
        name: 'Street Chair',
        price: 500.00,
        discount: 355.00,
        stars: 3,
        reviews: 58
    },
    {
        image: product_detailp,
        name: 'White Sofa',
        price: 500.00,
        discount: 355.00,
        stars: 3,
        reviews: 58
    }
]
</script>
<template>
    
    
    <HomeHero class="col-span-12"/>
    
    <HomeBadges class="col-span-12" />

    <h2 class="col-span-12 mx-auto mb-5 max-w-[1200px] px-5 flex w-full">
        SHOP BY CATEGORY
        
    </h2>
    <HomeCategories class="col-span-12" />

    <!-- /Slider  -->
    <h2 class="col-span-12 mx-auto mt-10 mb-5 max-w-[1200px] px-5 w-full">TOP NEW ARRIVAL</h2>
    <!-- Slider  -->

    <HomeSlider class="col-span-12" />    
    <HomeOffer/>

    <p class="col-span-12 mx-auto mt-10 mb-5 max-w-[1200px] px-5">RECOMMENDED FOR YOU</p>
    <RecommendedProducts class="col-span-12" :recommended-products="recommendedProducts"/>
    

   
</template>