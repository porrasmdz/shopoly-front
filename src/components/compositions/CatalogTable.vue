<script setup lang="ts">
import { IProduct } from '@/interfaces/IProduct';

import CatalogFilters from '@/components/compositions/CatalogFilters.vue';
import ProductCard from '@/components/ProductCard.vue';
import GridOptions from '@components/compositions/GridOptions.vue'
defineProps<{
    catalogProducts : (IProduct)[]
}>()
</script>
<template>

<section
        class="w-full container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
      >
        <CatalogFilters />
        <div>
          <!-- Table Filters> -->
          <GridOptions />
          <!-- /Table Filters -->

          <section
            class="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-3"
          >
            <ProductCard :product="product" v-for="product in catalogProducts" :key="`catalog-${product.name}`" />
            
          </section>
        </div>
      </section>
</template>