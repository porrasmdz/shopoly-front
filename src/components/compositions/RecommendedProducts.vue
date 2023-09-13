<script setup lang="ts">
import { IProduct } from '@/interfaces/IProduct';
import ProductCard from '@components/ProductCard.vue';

defineProps<{
    recommendedProducts: (IProduct)[]
}>();

</script>
<template>
    <!-- Recommendations -->
    <section
      class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4"
    >
      
      <ProductCard v-for="product in recommendedProducts" :key="`recomm-${product.name}`" :product="product"/>

    </section>
    <!-- /Recommendations -->

</template>