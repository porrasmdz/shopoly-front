<script setup lang="ts">
import TheBreadcrumbs from '@/components/compositions/TheBreadcrumbs.vue';
import CatalogTable from '@/components/compositions/CatalogTable.vue';
import { product_chairp, product_sofap, kitchenp, living_roomp, bedroomp, header_bg } from '@/constants/assets';
import { IProduct } from '@/interfaces/IProduct';
const catalogProducts: (IProduct)[] = [
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
    }
]

</script>
<template>
      
    <TheBreadcrumbs class="col-span-12" />

      <!-- TODO: REFACTOR WHOLE TABLE IN A COMPOSITION COMPONENT -->
      <CatalogTable class="col-span-12" :catalog-products="catalogProducts" />

</template>