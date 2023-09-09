<script setup lang="ts">
import {product_chairp, product_sofap, kitchenp, living_roomp, bedroomp, header_bg,outdoorp, product_detailp } from '@/constants/assets'
import { IProduct } from '@/interfaces/IProduct';
import ProductCard from '@components/ProductCard.vue';
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
    <!-- Recommendations -->
    <section
      class="col-span-12 mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4"
    >
      
      <ProductCard v-for="product in recommendedProducts" :key="`recomm-${product.name}`" :product="product"/>

    </section>
    <!-- /Recommendations -->

</template>